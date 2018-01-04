import { Injectable } from '@angular/core';
import { PieChartObject } from './pieChartObject';
import { ColumnChartObject } from './columnChartObject';
import { StudyYearObject } from './studyYearObject';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { DatePipe } from '@angular/common';
import { HttpClient } from '../common/http.client';
import { MyGlobals } from '../my-globals';

@Injectable()
export class ChartsService {

    constructor(private myGlobals: MyGlobals, private httpClient: HttpClient) { }

    private chartsUrl = this.myGlobals.WebApiUrl + 'api/charts';

    getPieChartData(godina: number, ciklus: string): Promise<PieChartObject[]> {
        let url=this.chartsUrl +"/PieChart" +"?godina=" + godina + "&ciklus=" + ciklus;
        return this.httpClient
            .get(url)
            .toPromise()
            .then(response => response.json())
            .catch((error) => {
            });;
    }
   
    getColumnChartData(godina: number, ciklus: string): Promise<ColumnChartObject[]> {
        let url=this.chartsUrl + "/ColumnChart" + "?godina=" + godina + "&ciklus=" + ciklus;
        return this.httpClient
            .get(url)
            .toPromise()
            .then(response => response.json())
            .catch((error) => {
            });;
    }
    getStudyYears(): Promise<StudyYearObject[]> {
        let url = this.chartsUrl + "/StudyYears";
        return this.httpClient
            .get(url)
            .toPromise()
            .then(response => response.json())
            .catch((error) => {
            });;
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