import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BooksService } from '../books.service';
import { BookCardComponent } from '../book-card/book-card.component';
import { Book } from '../book';
import { LoginService } from 'src/app/users/login/login.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { SearchValues } from './search-and-sort/search-values';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  constructor(private booksService: BooksService, public loginService: LoginService, private spinnerService : NgxSpinnerService) { }
  private page: number = 0
  private pageSize: number = 10
  public scrollDistance = 1
  public throttle = 100
  public loading = true
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
  sort() : void {
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

  private formParams() {
    let params
    if (this.sortBy) {
      params = {
        page: this.page,
        pageSize: this.pageSize,
        sortType: this.order,
        sortBy: this.sortBy
      };
    } else {
      params = {
        page: this.page,
        pageSize: this.pageSize,
      };
    }
    return params
  }
  public updateValues(values: SearchValues) {
    this.order = values.order
    this.sortBy = values.sortBy
  }
}


