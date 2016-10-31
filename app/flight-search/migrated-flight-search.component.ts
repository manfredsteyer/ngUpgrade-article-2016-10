import { Component, Inject } from '@angular/core';
import { FlightService } from '../services/flight.service';
import { Flight } from "../shared/flight";

// Add import for BookingEventService
import {BookingEventService} from "../services/booking-event.service";

@Component({
    selector: 'migrated-flight-search',
    templateUrl: './migrated-flight-search.component.html'
})
export class MigratedFlightSearchComponent {

    public from: string = "Hamburg";
    public to: string = "Graz";

    public selectedFlight: Flight;

    constructor(
        // Add argument for bookingEventService
        /* @Inject('bookingEventService')*/ private bookingEventService: BookingEventService,
        /*@Inject('flightService')*/ private flightService: FlightService) {
    }

    public get flights() {
        return this.flightService.flights;
    }

    public search() {
        this.flightService.find(this.from, this.to);
    }

    public select(flight: Flight) {
        this.selectedFlight = flight;

        // Call bookingEventService
        this.bookingEventService.publish(flight);
    }
}