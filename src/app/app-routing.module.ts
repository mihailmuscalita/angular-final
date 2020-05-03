import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AdminWindowComponent} from './admin-window/admin-window.component';
import {HomeAdminComponent} from './home-admin/home-admin.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent,
  }, {
  path: 'login',
  component: LoginComponent
  }, {
    path: 'adminWindow',
    component: AdminWindowComponent
  }, {
    path: 'adminHome',
    component: HomeAdminComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
