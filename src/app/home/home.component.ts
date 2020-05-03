import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dialog?: MatDialog) {
    this.gotoLogin();
  }

  ngOnInit() {
  }


  gotoLogin(){
    const dialogRef = this.dialog.open(LoginComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
