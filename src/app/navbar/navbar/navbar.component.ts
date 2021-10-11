import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/users/authentication.service';
import config from './../../shared.json';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public logo = config.logo;
  


  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  public isLoggedIn(): boolean {
    return  localStorage.getItem('username') != null
}
  public logOut(): void {
    this.authenticationService.logout()
  }

}
