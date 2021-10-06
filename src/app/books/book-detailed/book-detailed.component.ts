import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RentService } from 'src/app/bookcopy/rent.service';
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

  constructor(
    private route: ActivatedRoute,
    private bookService: BooksService,
    private rentService: RentService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.bookService.getBook(this.id).subscribe(data => {
        this.book = data;
      })
  }

  rentBook = (id:number) => {
    this.rentService.rent(id).subscribe(data => {
    });
  }

}
