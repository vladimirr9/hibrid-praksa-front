import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import config from '../../shared.json';


@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {

  public defaultImageUrl = config.defaultImageUrl;

  @Input() book : any;

}
