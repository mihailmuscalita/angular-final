import {Component, OnInit} from '@angular/core';
import { LoginModel } from '../models/login-model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiServices } from '../../services/api.services';
import { Usermodel } from '../../appmodels/usermodel';
import { Router } from '@angular/router';
import {AuthService} from '../../services/authentification.service';
import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: LoginModel = new LoginModel();
  loginForm: FormGroup;
  userModel: Usermodel;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder, private apiServices: ApiServices,
              private router: Router, private authService: AuthService,
              private dialogRef: MatDialogRef<LoginComponent>) { }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
     name: [this.user.name , [
        Validators.required
      ]],
      password: [this.user.password, [
        Validators.required
      ]]
    });
    this.returnUrl = '/login';
  }

  onLoginSubmit() {

     this.apiServices.authentification(this.user.name, this.user.password)
       .subscribe(data => { this.userModel = data;
                            if (this.userModel && data.role === "2") {
                                this.authService.token = data.token;
                                console.log(this.authService.token);
                                localStorage.setItem('token',this.authService.token);
                                this.dialogRef.close();
                                this.router.navigate(['/adminHome']);
                              } else {
                                alert('Invalid creditentials!');
                                this.user.name = '';
                                this.user.password = '';
                              }

       });
  }

  onCloseForm(){
    this.dialogRef.close();
  }


}
