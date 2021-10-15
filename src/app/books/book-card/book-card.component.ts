import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Author } from 'src/app/authors/author';
import { LoginService } from 'src/app/users/login/login.service';

import config from '../../shared.json';
import { Book } from '../book';
import { BookDeletionDialogComponent } from '../book-deletion-dialog/book-deletion-dialog.component';


@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {

  public defaultImageUrl = config.defaultImageUrl;

  constructor(private router: Router,
              public loginService: LoginService,
              private dialog: MatDialog) { }

  @Input() book!: Book;
  @Output() bookDeleted = new EventEmitter()

  openDetailedBookPage = (id: number) => {
    this.router.navigateByUrl("/books/" + id)
  }
  editBook(id: number) {
    this.router.navigateByUrl("/books/" + id + "/edit")
  }

  hasNoAuthors(authors : Author[]) : boolean {
    return authors.length === 0
  }
  deleteBook(id: number) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(BookDeletionDialogComponent, dialogConfig);

    if (dialogRef)
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.bookDeleted.emit(this.book);
      }  
    })
  }


}
