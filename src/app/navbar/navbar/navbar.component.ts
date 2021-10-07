import { Component, OnInit } from '@angular/core';
import config from './../../shared.json';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public logo = config.logo;
  


  constructor() { }

  ngOnInit(): void {
  }

}
