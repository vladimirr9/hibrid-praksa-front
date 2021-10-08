import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import config from '../../shared.json';
import { Book } from '../book';


@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {

  public defaultImageUrl = config.defaultImageUrl;

  constructor(private router: Router) { }

  @Input() book!: Book;


  openDetailedBookPage = (id: number) => {
    this.router.navigateByUrl("/books/" + id)
  }


}
