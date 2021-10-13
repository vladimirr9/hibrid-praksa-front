import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BooksService } from '../books.service';
import { BookCardComponent } from '../book-card/book-card.component';
import { Book } from '../book';
import { LoginService } from 'src/app/users/login/login.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  constructor(private booksService: BooksService, public loginService: LoginService, private spinnerService : NgxSpinnerService) { }
  private page: number = 0
  private pageSize: number = 10
  public scrollDistance = 2
  public throttle = 100
  public loading = true
  books!: Book[];

  ngOnInit(): void {
    this.loading = true
    this.spinnerService.show()
    this.booksService.getBooks(this.page, this.pageSize).subscribe(data => {
        this.books = data;
        this.loading = false;
      })
      this.page++
  }

  onScrollDown(): void {
    this.loading = true
    this.booksService.getBooks(this.page, this.pageSize).subscribe(data => {
      let newBooks = data
      for (let newBook of newBooks) {
        this.books.push(newBook)
      }
      this.loading = false
    })
    this.page++
  }

}
