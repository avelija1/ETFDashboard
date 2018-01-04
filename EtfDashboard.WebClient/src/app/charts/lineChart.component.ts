import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartsService } from '../charts/chart-service';


@Component({
    templateUrl: 'app/charts/lineChart.component.html'
})

export class LineChartComponent implements OnInit {
    chartData = [{ name: '2010', y: 20 }, { name: '2011', y: 30 }, { name: '2012', y: 40 }, { name: '2013', y: 60 }, { name: '2014', y: 60 }, { name: '2015', y: 80 }, { name: '2016', y: 80 }];

    constructor(private chartsService: ChartsService) {

    }
    lineData: Object;
    lineChart: Object;
    userName: string = localStorage.getItem("userName");
    godina: number;
    ciklusStudija: string;
    rok: string;

    ngOnInit() {


    }
    kreiraj() {

        
        let start = this.chartData[0].name;
        this.lineChart = {
            title: { text: 'Trend upisa na master studij:' },
            chart: { type: 'line' },
            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: start
                }
            },
            series: [{
                data: this.chartData,
                allowPointSelect: true
            }]
        };
    }

}
