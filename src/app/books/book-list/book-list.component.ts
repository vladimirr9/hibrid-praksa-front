import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BooksService } from '../books.service';
import { BookCardComponent } from '../book-card/book-card.component';
import { Book } from '../book';
import { LoginService } from 'src/app/users/login/login.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { SearchValues } from './search-and-sort/search-values';
import { BookParams } from '../book-params';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  constructor(private booksService: BooksService, public loginService: LoginService, private spinnerService: NgxSpinnerService) { }
  private page: number = 0
  private pageSize: number = 10
  public scrollDistance = 1
  public throttle = 100
  public loading = true
  public searchVal: string = ''
  public sortBy: string = ''
  public order: string = 'ASC'
  books!: Book[];

  ngOnInit(): void {
    this.loading = true
    this.spinnerService.show()
    let params = this.formParams()
    this.booksService.getBooks(params).subscribe(data => {
      this.books = data;
      this.loading = false;
    })
    this.page++
  }

  deleteBook(book: Book) {
    if (!book.id) return
    this.booksService.deleteBook(book.id).subscribe(() => {
      let index = this.books.indexOf(book);
      if (index !== -1) {
        this.books.splice(index, 1);
      }
    })
  }

  onScrollDown(): void {
    if (this.loading)
      return
    this.loading = true
    let params = this.formParams()
    this.booksService.getBooks(params).subscribe(data => {
      let newBooks = data
      for (let newBook of newBooks) {
        this.books.push(newBook)
      }
      this.loading = false
    })
    this.page++
  }
  sort(): void {
    if (this.loading)
      return
    this.loading = true
    this.books = []
    this.page = 0
    let params = this.formParams()
    this.booksService.getBooks(params).subscribe((data) => {
      this.books = data;
      this.loading = false;
    })
    this.page++

  }

  private formParams(): BookParams {
    let params: BookParams = {
      page: this.page,
      pageSize: this.pageSize,
    };
    if (this.sortBy) {
      params.sortType = this.order
      params.sortBy = this.sortBy
    }
    if (this.searchVal) {
      params.title = this.searchVal
      params.description = this.searchVal
      params.firstName = this.searchVal
      params.middleName = this.searchVal
      params.lastName = this.searchVal
    }
    return params
  }
  public updateValues(values: SearchValues) {
    this.order = values.order
    this.sortBy = values.sortBy
    this.searchVal = values.searchVal
  }
}


