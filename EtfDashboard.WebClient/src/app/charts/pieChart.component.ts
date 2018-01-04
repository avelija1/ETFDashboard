import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartsService } from '../charts/chart-service';


@Component({
    templateUrl: 'app/charts/pieChart.component.html'
})

export class PieChartComponent implements OnInit {
    chartData = [{ 'name': 'ri', y: 30 }, { name: 'tk', y: 15 }, { name: 'aie', y: 5 }, { name: 'ee', y: 10 }];

    constructor(private chartsService: ChartsService) {

    }
    bachelorStudentsPie: Object;
    masterStudentsPie: Object;
    bachelorStudentsBar: Object;
    bachelorStudentsLine: Object;
    o: Object;
    nova: Object;
    godina: number;
    ciklusStudija: string;
    studyYears = [];
    yearID: number;
    userName: string = localStorage.getItem("userName");
    ngOnInit() {
        this.chartsService.getStudyYears().then(response => {
            this.studyYears = response
        })
    }
    kreiraj() {

        if (this.ciklusStudija == undefined)
        {
            return;
        }
        if (this.ciklusStudija == 'master' && this.godina > 2)
        {
            return;
        }
        this.chartsService.getPieChartData(this.godina, this.ciklusStudija).then(response => {
            this.nova = response;
            this.bachelorStudentsPie = {
                title: { text: 'Studenti po odsjecima na ' + this.ciklusStudija + ' studij u ' +this.godina+ ' godini:' },
                chart: { type: 'pie' },

                series: [{
                    data: this.nova,
                    allowPointSelect: true
                }]
            };
        });
    }

}
