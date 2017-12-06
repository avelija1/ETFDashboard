﻿import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AuthGuard } from './login/auth.guard';
import { LoginGuard } from './login/login.guard';
import { ApplicationUserComponent } from './applicationUsers/applicationUser.component';
import { ApplicationUserSaveComponent } from './applicationUsers/applicationUserSave.component';
import { ApplicationUserDetails } from './applicationUsers/applicationUserDetails.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
    { path: 'applicationUsers', component: ApplicationUserComponent, canActivate: [AuthGuard] },
    { path: 'applicationUsers/details/:id', component: ApplicationUserDetails, canActivate: [AuthGuard] },
    { path: 'applicationUsersSave/:id', component: ApplicationUserSaveComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouting { }