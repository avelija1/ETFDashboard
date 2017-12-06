import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    templateUrl: 'app/applicationUsers/applicationUser.component.html'

})

export class ApplicationUserComponent implements OnInit {

    constructor(
        private router: Router,

    ) { }

    userName: string = localStorage.getItem("userName");
    ngOnInit() {
    }
    
}
