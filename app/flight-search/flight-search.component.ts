import {FlightService} from "../services/flight.service";
import {BookingEventService} from "../services/booking-event.service";
import {Flight} from "../shared/flight";

class FlightSearchController {

    public from: string = 'Hamburg';
    public to: string = 'Graz';
    public selectedFlight: Flight = null;
    private flightService: FlightService;
    private bookingEventService: BookingEventService;

    constructor(flightService: FlightService, bookingEventService: BookingEventService) {
        this.flightService = flightService;
        this.bookingEventService = bookingEventService;
    }

    getFlights() {
        return this.flightService.flights;
    }

    search() {

        return this
            .flightService
            .find(this.from, this.to)
            .catch(function (resp) {
                console.debug(resp);
            });
    }

    select(f) {
        console.debug('select', f);
        this.selectedFlight = f;
        this.bookingEventService.publish(f);
    }
}

export const FlightSearchComponent: angular.IComponentOptions = {
    controller: FlightSearchController,
    templateUrl: './flight-search.component.html'
}