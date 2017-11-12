import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AuthGuard } from './login/auth.guard';
import { LoginGuard } from './login/login.guard';
import { ApplicationUserComponent } from './applicationUsers/applicationUser.component';
import { ApplicationUserRegisterComponent } from './applicationUsers/applicationUserRegister.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
    { path: 'applicationUsers', component: ApplicationUserComponent, canActivate: [AuthGuard] }
    { path: 'registration', component: ApplicationUserRegisterComponent }


]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouting { }