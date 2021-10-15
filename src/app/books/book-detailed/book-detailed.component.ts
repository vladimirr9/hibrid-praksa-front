import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { RentService } from 'src/app/bookcopy/rent.service';
import { LoginService } from 'src/app/users/login/login.service';
import { Book } from '../book';
import { BookDeletionDialogComponent } from '../book-deletion-dialog/book-deletion-dialog.component';
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
    public loginService: LoginService,
    private dialog: MatDialog
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
  deleteBook(id: number) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(BookDeletionDialogComponent, dialogConfig);

    if (dialogRef)
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.bookService.deleteBook(this.id).subscribe(() => {
          this.router.navigateByUrl("/books")
        })
      }  
    })
    
  }


}
