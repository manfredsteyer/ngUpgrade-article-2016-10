import * as angular from 'angular';

import {FlightService} from "./services/flight.service";
import {createCityFilter} from "./fliters/city.filter";

// Remove import for createFlightCardDirective
// import {createFlightCardDirective} from "./flight-search/flight-card.directive";

// Add import for FlightCardComponent
import {FlightCardComponent} from "./flight-search/flight-card.component";


import {createCityValidatorDDO} from "./validation/city-validator";
import {createCityAsyncValidatorDDO} from "./validation/city-async-validator";
import {HomeComponent} from "./home/home.component";
import {PassengerSearchComponent} from "./passenger-search/passenger-search.component";
import {AppComponent} from "./app.component";

// Remove FlightEdit
//import {FlightEditComponent} from "./flight-edit/flight-edit.component";

import {FlightBookingComponent} from "./flight-booking/flight-booking.component";
import { OAuthService} from 'angular2-oauth2/oauth-service';
import tabs from './tabs/tabs.module';
import {BookingEventService} from "./services/booking-event.service";
import {ShoppingCardComponent} from "./shopping-card/shopping-card.component";

// Remove import for FlightSearchController
// import { FlightSearchController } from './flight-search/flight-search';

// Add import for FlightSearchComponent
import { FlightSearchComponent } from './flight-search/flight-search.component';

// Add import for UpgradeAdapter
import { UpgradeAdapter } from '@angular/upgrade';

// Add imports for dependencies from @angular/core
import { forwardRef, NgModule } from '@angular/core';

// Add imports for Angular 2 modules
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// Add import for MigratedFlightSearchComponent
import {MigratedFlightSearchComponent} from "./flight-search/migrated-flight-search.component";
import {PassengerCardComponent} from "./passenger-search/passenger-card.component";

// Remove import for PassengerService
// import {PassengerService} from "./services/passenger.service";

// Add import for MigratedPassengerService
import {MigratedPassengerService} from "./services/migrated-passenger.service";
import {MigratedTabsModule} from "./tabs/migrated-tabs.module";
import {MigratedTabComponent, MigratedTabsComponent} from "./tabs/migrated-tabs.component";

// Add import for MigratedFlightEditComponent
import {MigratedFlightEditComponent} from "./flight-edit/migrated-flight-edit.component";

var app = angular.module('flight-app', ['ngMessages', 'ui.router', tabs]);

// Remove registration for FlightSearchController
// app.controller('FlightSearchController', FlightSearchController);

// Add registration for FlightSearchComponent
app.component('flightSearch', FlightSearchComponent);

app.service("flightService", FlightService);
app.service('bookingEventService', BookingEventService );
app.constant("baseURL", "http://www.angular.at")
app.filter("city", createCityFilter);
//app.component('flightCard', FlightCardComponent);

// Remove registration for the directive flightCard
// app.directive('flightCard', createFlightCardDirective);

// Add registration for the FlightCardComponent
app.component('flightCard', FlightCardComponent);

app.directive('city', createCityValidatorDDO);
app.directive('cityAsync', createCityAsyncValidatorDDO);
app.component('home', HomeComponent);
app.component('app', AppComponent);

// Remove registration for flightEdit
// app.component('flightEdit', FlightEditComponent);

app.component('flightBooking', FlightBookingComponent);
app.service('oauthService', OAuthService);
app.component('shoppingCard', ShoppingCardComponent);

app.component('passengerCard', PassengerCardComponent);
app.component('passengerSearch', PassengerSearchComponent);

// Remove registration for passengerService
//app.service('passengerService', PassengerService);

// Create UpgradeAdapter
export const upgradeAdapter = new UpgradeAdapter(forwardRef(() => AppModule));

// Add MigratedAppModule
@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        // Add import for MigratedTabsModule
        MigratedTabsModule
    ],
    declarations: [
        MigratedFlightSearchComponent,
        upgradeAdapter.upgradeNg1Component('flightCard'),
        MigratedFlightEditComponent
    ],
    providers: [
        MigratedPassengerService
    ]
})
class AppModule {
}



// Add Upgrade for flightService
upgradeAdapter.upgradeNg1Provider('flightService',  { asToken: FlightService });

// Add Upgrade for booking-event.service
upgradeAdapter.upgradeNg1Provider('bookingEventService', { asToken: BookingEventService });

// Downgrade migratedFlightSearch
app.directive('migratedFlightSearch', <any>upgradeAdapter.downgradeNg2Component(MigratedFlightSearchComponent))

// Downgrade MigratedPassengerService and register it as passengerService
app.factory('passengerService', upgradeAdapter.downgradeNg2Provider(MigratedPassengerService));

// Downgrade MigratedFlightEditComponent and register it
app.directive('flightEdit', <any>upgradeAdapter.downgradeNg2Component(MigratedFlightEditComponent));

