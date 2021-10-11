import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/users/authentication.service';
import { LoginService } from 'src/app/users/login/login.service';
import config from './../../shared.json';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent{
  public logo = config.logo;

  constructor(public authenticationService: AuthenticationService,
              public loginService: LoginService) { }

  ngOnInit(): void {
  }

  public logOut(): void {
    this.authenticationService.logout()
  }

}
