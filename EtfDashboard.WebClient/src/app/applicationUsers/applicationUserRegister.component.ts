import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationUserService } from './applicationUser-service';
import { ApplicationUser } from './applicationUser';


@Component({
    templateUrl: 'app/applicationUsers/applicationUserRegister.component.html'

})

export class ApplicationUserRegisterComponent {

    constructor(private applicationUserService: ApplicationUserService, private router: Router) { }

    private newApplicationUser: ApplicationUser = new ApplicationUser();
    private passwordConfirm: string = "";

    userName: string;
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
    goBack() {
        window.history.back();
    }

}
