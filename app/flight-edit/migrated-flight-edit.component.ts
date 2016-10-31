import {FlightService} from "../services/flight.service";
import {Flight} from "../shared/flight";

import { Component, OnInit, Input, Inject } from '@angular/core';

@Component({
    selector: 'flight-edit',
    templateUrl: './migrated-flight-edit.component.html'
})
export class MigratedFlightEditComponent implements OnInit {
    info = "Flight Edit!";
    @Input() id: string;
    flight: Flight = <any>{};
    message: string;

    constructor(private flightService: FlightService) {
    }

    ngOnInit() {

        this.flightService
            .getById(this.id)
            .then((flight: Flight) => {
                this.flight = flight;
                this.message = "";
            })
            .catch(resp => {
                console.error(resp);
                this.message = resp.data;
            })
    }

    save() {

        this.flightService
            .save(this.flight)
            .then((flight: Flight) => {
                this.flight = flight;
                this.message = "";
            })
            .catch(resp => {
                console.error(resp);
                this.message = resp.data;
            })
    }
}

