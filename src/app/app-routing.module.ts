import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from './User/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './User/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },

  { path: 'dashboard', component: DashboardComponent }, // Add Dashboard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
