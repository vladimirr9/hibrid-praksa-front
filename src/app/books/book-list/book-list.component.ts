import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BooksService } from '../books.service';
import { BookCardComponent } from '../book-card/book-card.component';
import { Book } from '../book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  constructor(private booksService: BooksService) { }

  books!: Observable<Book[]>;

  ngOnInit(): void {
    this.books = this.booksService.getBooks()
  }

}
