import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import config from './../../shared.json'
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public registrationFailed: boolean = false

  public passwordRepeatFailed: boolean = false

  public logo_dark = config.logo_dark;

  constructor(public loginService: LoginService,
              private registrationService : RegistrationService,
              private router: Router) { }

  public registrationForm = new FormGroup({
    username: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    repeatPassword: new FormControl('', Validators.required)
  })

  ngOnInit(): void {
  }

  onSubmit() {
    this.registrationFailed = false
    this.passwordRepeatFailed = this.registrationForm.get('password')?.value != this.registrationForm.get('repeatPassword')?.value
    if (this.registrationForm.invalid || this.passwordRepeatFailed) {
        return
    }
    this.registrationService.register(this.registrationForm.get('username')?.value,
     this.registrationForm.get('password')?.value,
      this.registrationForm.get('firstName')?.value,
      this.registrationForm.get('lastName')?.value).subscribe( data => {
        this.router.navigateByUrl('login')
      }, (error: Error) => {
        this.registrationFailed = true
      })
    
  }
}
