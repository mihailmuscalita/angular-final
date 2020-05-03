import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material-module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiServices } from '../services/api.services';
import { AdminWindowComponent } from './admin-window/admin-window.component';
import { APP_BASE_HREF } from '@angular/common';
import { LogoutComponent } from './logout/logout.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import {
  MatCardModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule, MatIconModule,
  MatPaginatorModule,
  MatTableModule, MatToolbarModule
} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatRippleModule} from '@angular/material';
import {AuthService} from '../services/authentification.service';
import { AddCompetitionComponent } from './add-competition/add-competition.component';
import { ActiveCompetitionDetailsComponent } from './active-competition-details/active-competition-details.component';
import { CompetitionInformationComponent } from './competition-information/competition-information.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'competition', component: HomeAdminComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminWindowComponent,
    LogoutComponent,
    HomeAdminComponent,
    AddCompetitionComponent,
    ActiveCompetitionDetailsComponent,
    CompetitionInformationComponent,
    // MatIconModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule,
    MatDialogModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatIconModule,
    MatToolbarModule,
    MatExpansionModule,
    RouterModule.forRoot(appRoutes)
    // MatIconModule
  ],
  providers: [ApiServices, { provide: APP_BASE_HREF, useValue: '' }, AuthService],
  entryComponents: [AddCompetitionComponent, ActiveCompetitionDetailsComponent, CompetitionInformationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
