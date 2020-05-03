import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Competitionmodel} from '../appmodels/competitionmodel';
import {catchError} from 'rxjs/operators';
import {AuthService} from './authentification.service';


@Injectable()
export class ApiServices {

  url = 'http://192.168.0.10:8080/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private httpclient: HttpClient,
              private authService: AuthService){

  }

  authentification(username, password): Observable<any> {
    this.httpOptions.headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.httpclient
      .post<any>(
        this.url + "authenticate",
        { username: username, password: password },
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  getCompetitions(): Observable<Competitionmodel[]> {
    this.httpOptions.headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem('token')
    });
    return this.httpclient.get<Competitionmodel[]>(this.url +'license/competitions',this.httpOptions);
  }

  getActiveCompetition(): Observable<any> {
    this.httpOptions.headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem('token')
    });
    return this.httpclient.post<any>(this.url +'license/competitions/active',{},this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  startCompetition(id): Observable<any> {
    this.httpOptions.headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem('token')
    });
    return this.httpclient.post<any>(this.url+ 'license/competitions/competition/'+ id.toString(),{}, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  addCompetition(competitionTitle, competitionReward): Observable<any>{
    this.httpOptions.headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem('token')
    });
    return this.httpclient.post<any>(this.url+ 'license/competitions',{competitionTitle:competitionTitle, competitionReward:competitionReward }, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  stopCompetition():Observable<any>{
    this.httpOptions.headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem('token')
    });
    return this.httpclient.post<any>(this.url+ 'license/competitions/finished',{}, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  sendEmails():Observable<any>{
    this.httpOptions.headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem('token')
    });
    return this.httpclient.post<any>(this.url+ 'license/competitions/emails',{}, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(errorRespone: HttpErrorResponse) {
    if (errorRespone instanceof ErrorEvent) {
      console.error('Clint side error:', errorRespone.error.message);
    } else {
      console.error('Server side error:', errorRespone.error.message);
    }
    return throwError('Is an error with the service! Sorry for inconvenience!');
  }


  private handleLoginError(errorRespone: HttpErrorResponse) {
    if (errorRespone instanceof ErrorEvent) {
      console.error("Clint side error:", errorRespone.error.message);
    } else {
      console.error("Server side error:", errorRespone.error.message);
      alert("Authentication failed!");
    }
    return throwError("Is an error with the service! Sorry for inconvenience!");
  }

}
