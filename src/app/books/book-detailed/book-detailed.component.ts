import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { RentService } from 'src/app/bookcopy/rent.service';
import { LoginService } from 'src/app/users/login/login.service';
import { Book } from '../book';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-detailed',
  templateUrl: './book-detailed.component.html',
  styleUrls: ['./book-detailed.component.scss']
})
export class BookDetailedComponent implements OnInit {

  id!: number
  public book!: Book
  public loading: boolean = true

  constructor(
    private route: ActivatedRoute,
    private bookService: BooksService,
    private rentService: RentService,
    private spinnerService: NgxSpinnerService,
    private router: Router,
    public loginService: LoginService
  ) {
  }

  ngOnInit() {
    this.spinnerService.show()
    this.loading = true
    this.id = this.route.snapshot.params['id'];
    this.bookService.getBook(this.id).subscribe(data => {
        this.book = data;
        this.loading = false
      })
  }
  editBook(id: number) {
    this.router.navigateByUrl("/books/" + id + "/edit")
  }


}
