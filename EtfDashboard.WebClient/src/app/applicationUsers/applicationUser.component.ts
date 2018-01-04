import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartsService } from '../charts/chart-service';


@Component({
    selector: 'simple-chart-example',
    templateUrl: 'app/applicationUsers/applicationUser.component.html'
})

export class ApplicationUserComponent implements OnInit {
    bachelor = [{ 'name': 'RI', y: 30 }, { name: 'TK', y: 15 }, { name: 'AIE', y: 5 }, { name: 'EE', y: 10 }];
    master = [{ name: 'RI', y: 60 }, { name: 'TK', y: 15 }, { name: 'AIE', y: 10 }, { name: 'EE', y: 15 }];
    masterbar = [{ name: 'RI', y: 60 }, { name: 'TK', y: 15 }, { name: 'AIE', y: 10 }, { name: 'EE', y: 15 }];
    masterLine = [{ name: '2010', y: 20 }, { name: '2011', y: 30 }, { name: '2012', y: 40 }, { name: '2013', y: 60 }, { name: '2014', y: 60 }, { name: '2015', y: 80 }, { name: '2016', y: 80 }];

    constructor(private chartsService: ChartsService, private router: Router) {
        this.userName = localStorage.getItem("userName");

    }
    bachelorStudentsPie: Object;
    masterStudentsPie: Object;
    bachelorStudentsBar: Object;
    bachelorStudentsLine: Object;
    o: Object;
    userName: string 
    nova: Object;

    ngOnInit() {
        this.chartsService.getPieChartData(1,'222').then(response => {
            this.nova = response;
            this.bachelorStudentsPie = {
                title: { text: 'Studenti po odsjecima na bachelor studij:' },
                chart: { type: 'pie' },

                series: [{
                    data: this.nova,
                    allowPointSelect: true
                }]
            };
            });
        
        this.masterStudentsPie = {
            title: { text: 'Studenti po odsjecima na master studij:' },
            chart: { type: 'pie' },
            series: [{
                data: this.master,
                allowPointSelect: true
            }]
        };
        this.bachelorStudentsBar = {
            title: { text: 'Studenti po odsjecima na master studij:' },
            chart: { type: 'bar' },
            xAxis: {
                categories: ['RI', 'TK', 'EE', 'AIE'],
                title: {
                    text: null
                }
            },
            series: [{
                data: this.masterbar,
                allowPointSelect: true
            }]
        };
        this.bachelorStudentsLine = {
            title: { text: 'Trend upisa na master studij:' },
            chart: { type: 'line' },
            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: 2010
                }
            },
            series: [{
                data: this.masterLine,
                allowPointSelect: true
            }]
        };
        this.o = {
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
    goToPieChart() {
        let link = ['/charts/piechart'];
        this.router.navigate(link);
    }

    goToColumnChart() {
        let link = ['/charts/columnchart'];
        this.router.navigate(link);
    }

}
