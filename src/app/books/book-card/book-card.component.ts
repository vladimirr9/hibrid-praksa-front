import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { Author } from 'src/app/authors/author';
import { LoginService } from 'src/app/users/login/login.service';
import config from '../../shared.json';
import { Book } from '../book';


@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {

  public defaultImageUrl = config.defaultImageUrl;

  constructor(private router: Router,
              public loginService: LoginService) { }

  @Input() book!: Book;


  openDetailedBookPage = (id: number) => {
    this.router.navigateByUrl("/books/" + id)
  }
  editBook(id: number) {
    this.router.navigateByUrl("/books/" + id + "/edit")

  }

  hasNoAuthors(authors : Author[]) : boolean {
    return authors.length === 0
  }


}
