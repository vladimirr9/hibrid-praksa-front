import { Component, OnInit } from '@angular/core';
import config from './../../shared.json';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent{
  public logo = config.logo;
}
