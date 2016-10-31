import {Flight} from "../shared/flight";
import * as angular from 'angular';

class FlightCardController {
    item: Flight;
    selectedItem: Flight;
    selectedItemChange: Function;

    select() {
        this.selectedItem = this.item;
        if (this.selectedItemChange) {
            this.selectedItemChange(this.selectedItem);
        }
    }
}

export const FlightCardComponent: angular.IComponentOptions = {
    controller: FlightCardController,
    templateUrl: './flight-card.component.html',
    transclude: true,
    bindings: {
        item: '<',
        selectedItem: '<',
        selectedItemChange: '&'
    }
}

/*
export function createFlightCardDirective(): angular.IDirective {
    return {
        controller: FlightCardController,
        templateUrl: 'app/flight-search/flight-card.component.html',
        transclude: true,
        bindToController: true,
        controllerAs: '$ctrl',
        scope: {
            item: '=',
            selectedItem: '='
        }
    }
}
*/