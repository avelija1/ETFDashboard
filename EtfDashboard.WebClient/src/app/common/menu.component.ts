﻿import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GlobalEventsManager } from './global-events-manager';
import { Router } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { AuthService } from '../login/auth.service';

@Component({
    selector: 'main-menu',
    templateUrl: 'app/common/menu.component.html'
})

export class MenuComponent implements OnInit {
    public isAdmin: boolean;
    public showMenu: boolean;
    private userFirstName: string;

    constructor(private globalEventsManager: GlobalEventsManager, private authService: AuthService, private router: Router) {

        this.globalEventsManager.showMenu.subscribe((mode: boolean) => {
            this.showMenu = mode;
        });

        this.globalEventsManager.isAdmin.subscribe((isAdmin: boolean) => {
            this.isAdmin = isAdmin;
        });
    }

    ngOnInit() {
        this.globalEventsManager.showMenu.emit(this.authService.isLoggedIn);
        this.globalEventsManager.isAdmin.emit(this.authService.isAdmin);
        this.userFirstName = localStorage.getItem('currentUser');
    }

    logout() {
        this.globalEventsManager.showMenu.emit(false);
        this.authService.logout();
        this.router.navigate(['/login']);     
    }
}