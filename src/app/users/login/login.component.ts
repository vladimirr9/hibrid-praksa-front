import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { LoginService } from './login.service';
import config from "./../../shared.json"
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  public loginFailed: boolean = false

  public logo = config.logo;

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              public loginService: LoginService) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  onSubmit(): void {
    this.loginFailed = false
    if (this.loginForm.invalid) {
      return;
  }
    this.authenticationService.login(this.loginForm.get('username')?.value, this.loginForm.get('password')?.value)
    .subscribe((data: any) => {
      let decoded : any = jwt_decode(data.token)
      localStorage.setItem('username', data.username)
      localStorage.setItem('token', data.token)
      localStorage.setItem('role', decoded.role)
      
      console.log(this.loginService.getRole())
      this.authenticationService.getProfile()
      this.router.navigateByUrl("/books")
    },
    (error: Error) => {
      this.loginFailed = true
    })
  }

  

}
