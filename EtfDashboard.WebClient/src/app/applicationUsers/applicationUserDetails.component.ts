import { ApplicationUser } from './applicationUser';
import { ApplicationUserService } from './applicationUser-service';
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'app/applicationUsers/applicationUserDetails.component.html'
})

export class ApplicationUserDetails implements OnInit {
    constructor(
        private userService: ApplicationUserService,
        private route: ActivatedRoute,
        private router: Router,
    ) { }

    private user: ApplicationUser;

    ngOnInit() {

        this.route.params.forEach((params: Params) => {
            let id = params['id'];

            this.userService
                .getUserById(id)
                .then(response => {
                    this.user = response;
                })
        });

    }

    goBack() {
        window.history.back();
    }
}