import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { LoggedInAuthGuard } from 'src/app/guards/logged-in-auth.guard';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '',component:AuthComponent, children: [
    { path: '', redirectTo: 'main', pathMatch: 'prefix' },
    { path:"main", component: LandingPageComponent },
    { path:"login", component: LoginComponent , canActivate:[LoggedInAuthGuard]},
    { path:"register", component: RegisterComponent , canActivate:[LoggedInAuthGuard]},
    { path: 'forgot', component: ForgotPassComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
