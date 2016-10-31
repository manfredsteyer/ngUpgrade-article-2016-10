import {Passenger} from "../shared/passenger";

// Add imports
import {Http, URLSearchParams, Headers} from '@angular/http';
import {Injectable} from '@angular/core';

// Alter Name and add Injectable
@Injectable()
export class MigratedPassengerService {

    // Update constructor
    constructor(private http: Http) {
    }

    find(name): Promise<Passenger[]> {
        // Add debug-info
        console.debug('calling MigratedPassengerService.find', name);

        var url = "http://www.angular.at/api/passenger";


        // Update urlParams
        // var urlParams = { name: name };
        let urlParams = new URLSearchParams()
        urlParams.set('name', name);

        // Create Headers instance
        let headers = new Headers();
        headers.set('Accept', 'text/json');

        // Update call to http service
        /*
        return this
                .$http
                .get(url, { params: urlParams })
                .then(resp => resp.data);
        */
        return this
                .http
                .get(url, {search: urlParams, headers: headers})
                .map(resp => resp.json())
                .toPromise();
    }
}