import { Injectable } from '@angular/core';
import { ApplicationUser } from './applicationUser';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { DatePipe } from '@angular/common';
import { HttpClient } from '../common/http.client';
import { MyGlobals } from '../my-globals';

@Injectable()
export class ApplicationUserService {

    constructor(private myGlobals: MyGlobals, private httpClient: HttpClient) { }

    private applicationUsersUrl = this.myGlobals.WebApiUrl + 'api/applicationUsers';


    registerApplicationUser(newApplicationUser: ApplicationUser) {
        let url = this.applicationUsersUrl;

        return this.httpClient
            .post(url, newApplicationUser).toPromise().then(response => this.extractData(response)
            );
    }

    private extractData(res: any) {
        let body;

        // check if empty, before call json
        if (res.text()) {
            body = res.json();
        }

        return body || {};
    }
}