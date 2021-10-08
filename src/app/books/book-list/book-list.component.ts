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
  private page: number = 0
  private pageSize: number = 10
  public scrollDistance = 2
  public throttle = 100


  books!: Book[];

  ngOnInit(): void {
    this.booksService.getBooks(this.page, this.pageSize).subscribe(data => {
        this.books = data;
      })
      this.page++
  }

  onScrollDown(): void {
    this.booksService.getBooks(this.page, this.pageSize).subscribe(data => {
      let newBooks = data
      for (let newBook of newBooks) {
        this.books.push(newBook)
      }
    })
    this.page++
  }

}
