import * as angular from 'angular';
import { IStateProvider, IUrlRouterProvider } from 'angular-ui-router';

angular
    .module('flight-app')
    .config(function ($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) {

        $urlRouterProvider.otherwise("/home");

        $stateProvider.state('home', {
            url: '/home',
            template: '<home></home>'
        })
            .state('flightBooking', {
                abstract: true,
                url: '/flightBooking',
                template: '<flight-booking></flight-booking>'
            })
            // Remove route
            .state('flightBooking.flightSearch', {
                url: '/flight',
                //template: '<flight-search></flight-search>'
                template: '<migrated-flight-search></migrated-flight-search>'
            })
            .state('flightBooking.passengerSearch', {
                url: '/passenger',
                template: '<passenger-search></passenger-search>'
            })
            .state('flightBooking.flightEdit', {
                url: '/flight/:id',
                template: '<flight-edit [id]="$ctrl.id"></flight-edit>',
                resolve: {
                    id: $stateParams => $stateParams.id
                    // same as:
                    // id: function($stateParams) { return $stateParams.id; }
                },
                controllerAs: '$ctrl',
                controller: function(id) { this.id = id; }
            });

});




