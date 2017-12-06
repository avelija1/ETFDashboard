import { Component, OnInit } from '@angular/core';
import { ApplicationUserService } from './applicationUser-service';
import { ApplicationUser } from './applicationUser';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    templateUrl: 'app/applicationUsers/applicationUserSave.component.html'

})

export class ApplicationUserSaveComponent {

    constructor(private applicationUserService: ApplicationUserService, private route: ActivatedRoute) { }

    private newApplicationUser: ApplicationUser = new ApplicationUser();
    private passwordConfirm: string = "";

    userName: string;
    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            if (id) {
                this.applicationUserService
                    .getUserById(id)
                    .then(response => {
                        this.newApplicationUser = response;
                        this.passwordConfirm = this.newApplicationUser.password

                    })
            }
        });
    }

    register() {
        this.newApplicationUser.role = "Administrator";
        if (this.newApplicationUser.password != this.passwordConfirm)
        {
            alert("Passwords don't match!");
            return;
        }
        this.applicationUserService.registerApplicationUser(this.newApplicationUser).then((result) => {
            alert("User " + this.newApplicationUser.userName + " successfully registered!");
            this.goBack();
        })
            .catch((result) => {
           });
    }
    edit()
    {
        this.newApplicationUser.role = "Administrator";
        this.applicationUserService.put(this.newApplicationUser).then((result) => {
            alert("User " + this.newApplicationUser.userName + " successfully registered!");
            this.goBack();
        })
    }
    goBack() {
        window.history.back();
    }

}
