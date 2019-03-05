import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup;
  us: string;
  pw: string;


  constructor(private rutaLogin: Router) {

    this.LoginForm = new FormGroup({
      'user': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
  }

  Login(user: string, password: string) {

    this.us = user;
    this.pw = password;
    if (this.us == 'granada' && this.pw == '1234') {
      this.rutaLogin.navigate(['/home']);
      this.LSlogin();
    }
  }

  LSlogin() {
    localStorage.setItem('user', this.us);
    localStorage.setItem('password', this.pw);
  }


}
