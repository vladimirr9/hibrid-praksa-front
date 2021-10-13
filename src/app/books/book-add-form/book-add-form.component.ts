import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Author } from 'src/app/authors/author';
import { AuthorDialogComponent } from 'src/app/authors/author-dialog/author-dialog.component';
import { AuthorService } from 'src/app/authors/author.service';
import { Book } from '../book';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-add-form',
  templateUrl: './book-add-form.component.html',
  styleUrls: ['./book-add-form.component.scss']
})
export class BookAddFormComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private authorService: AuthorService,
    private bookService: BooksService,
    private dialog: MatDialog,
    private router: Router,
    private spinnerService: NgxSpinnerService) { }

  authors: Author[] = []

  isbnReg: string = "^(?=(?:\\D*\\d){10}(?:(?:\\D*\\d){3})?$)[\\d-]+$";

  selectedAuthors: Author[] = []

  loading : boolean = true

  edit : boolean = false

  id: number = 0

  public submitFailed: boolean = false

  addBookForm = this.fb.group({
    title: ['', Validators.required],
    description: '',
    authors: this.fb.array([]),
    creationDate: ['', Validators.required],
    isbn: ['', Validators.required],
    quantity: [''],
    imageUrl: ['']
  })

  ngOnInit(): void {
    this.spinnerService.show()
    this.authorService.getAuthors().subscribe(data => {
      this.authors = data.map(item => {
        return {
          "firstName": item.firstName,
          "middleName": item.middleName,
          "lastName": item.lastName,
          "fullName": item.firstName + " " + item.lastName
        }
      })
      if (this.router.url.endsWith('edit')) {
        this.edit = true
        this.id = this.route.snapshot.params['id'];
        this.bookService.getBook(this.id).subscribe(data => {
          this.addBookForm.get('title')?.setValue(data.title)
          this.addBookForm.get('description')?.setValue(data.description)
          this.selectedAuthors = data.authors.map(item => {
            return {
              "firstName": item.firstName,
              "middleName": item.middleName,
              "lastName": item.lastName,
              "fullName": item.firstName + " " + item.lastName
            }
          })
          this.addBookForm.get('creationDate')?.setValue(data.creationDate)
          this.addBookForm.get('isbn')?.setValue(data.isbn)
          this.addBookForm.get('quantity')?.setValue(data.quantity)
          this.addBookForm.get('imageUrl')?.setValue(data.imageUrl)
          this.loading = false
        })
      } else {
        this.loading = false
      }
    })
  }

  newAuthor() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(AuthorDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data) {
          this.authorService.postAuthor(data).subscribe((data) => {
            data.fullName = data.firstName + " " + data.lastName
            this.authors = [...this.authors, data]
            this.selectedAuthors = [...this.selectedAuthors, data]
          })
        }
      }
    );
  }

  onSubmit() {
    if (this.addBookForm.invalid) {
      this.submitFailed = true
      return;
    }
    this.submitFailed = false
    let book : Book = {
      title: this.addBookForm.get('title')?.value,
      description: this.addBookForm.get('description')?.value,
      creationDate: this.addBookForm.get('creationDate')?.value,
      isbn: this.addBookForm.get('isbn')?.value,
      authors: this.selectedAuthors.map(item => {
        return {
          "firstName": item.firstName,
          "middleName": item.middleName,
          "lastName": item.lastName
        }
      }),
      quantity: this.addBookForm.get('quantity')?.value,
      imageUrl: this.addBookForm.get('imageUrl')?.value
    }
    if (this.edit) {
      this.bookService.putBook(this.id, book).subscribe(data => {
        this.router.navigateByUrl('/books/' + data.id)
      }, (errorResponse: any) => {
        this.submitFailed = true
      })
    }
    else {
      this.bookService.postBook(book).subscribe(data => {
        this.router.navigateByUrl('/books/' + data.id)
      }, (errorResponse: any) => {
        this.submitFailed = true
      })
  
    }
    }
    
}
