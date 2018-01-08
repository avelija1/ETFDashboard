import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartsService } from '../charts/chart-service';


@Component({
    templateUrl: 'app/charts/columnChart.component.html'
})

export class ColumnChartComponent implements OnInit {

    constructor(private chartsService: ChartsService) {

    }
    studyYears = [];
    yearID: number;
    o: Object;
    columnChart: Object;
    godina: number;
    k: Object;
    ciklusStudija: string;
    rok: string;
    userName: string = localStorage.getItem("userName");

    ngOnInit() {
        this.yearID = 0;
        this.chartsService.getStudyYears().then(response => {
            this.studyYears = response
        })
    }

    kreiraj() {

        this.chartsService.getColumnChartData(this.godina, this.ciklusStudija).then(response => {
            this.o = response;
            let kategorije = [];
            this.rok = "Sve";
            if (this.rok == "Januar") {
                kategorije = [
                    'Januar',
                ]
                this.o = [{ name: response[0].name, data: [response[0].data[0]] }, { name: response[1].name, data: [response[1].data[0]] }, { name: response[2].name, data: [response[2].data[0]] }, { name: response[3].name, data: [response[3].data[0]] }]


            }
            else if (this.rok == "Jul") {
                kategorije = [
                    'Jul',
                ]
                this.o = [{ name: response[0].name, data: [response[0].data[1]] }, { name: response[1].name, data: [response[1].data[1]] }, { name: response[2].name, data: [response[2].data[1]] }, { name: response[3].name, data: [response[3].data[1]] }]


            }
            else if (this.rok == "Septembar") {
                kategorije = [
                    'Septembar',
                ]
                this.o = [{ name: response[0].name, data: [response[0].data[2]] }, { name: response[1].name, data: [response[1].data[2]] }, { name: response[2].name, data: [response[2].data[2]] }, { name: response[3].name, data: [response[3].data[2]] }]

            }
            else if (this.rok == "Sve") {
                kategorije = [
                    'Januar',
                    'Jul',
                    'Septembar'
                ]
                this.o = [{
                    name: response[0].name, data: [response[0].data[0], response[0].data[1], response[0].data[2]]
                },
                {
                    name: response[1].name, data: [response[1].data[0], response[1].data[1], response[1].data[2]]
                },
                {
                    name: response[2].name, data: [response[2].data[0], response[2].data[1], response[2].data[2]]
                },
                {
                    name: response[3].name, data: [response[3].data[0], response[3].data[1], response[3].data[2]]
                }]
            }
            else {
                return;
            }
            this.columnChart = {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Prolaznost po rokovima'
                },
                xAxis: {
                    categories: kategorije,
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Prolaznost (%)'
                    }
                },

                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                series: this.o
            };
        });

        this.k = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Prolaznost po rokovima'
            },
            xAxis: {
                categories: [
                    'Januar',
                    'Jul',
                    'Septembar',
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Prolaznost (%)'
                }
            },

            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'AIE',
                data: [49.9, 30.5, 10.4]

            }, {
                name: 'RI',
                data: [83.6, 78.8, 98.5]

            }, {
                name: 'TK',
                data: [48.9, 38.8, 39.3]

            }, {
                name: 'EE',
                data: [48.9, 38.8, 39.3]

            }]
        };
    }

}
