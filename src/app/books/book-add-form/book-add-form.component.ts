import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Author } from 'src/app/authors/author';
import { AuthorService } from 'src/app/authors/author.service';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-add-form',
  templateUrl: './book-add-form.component.html',
  styleUrls: ['./book-add-form.component.scss']
})
export class BookAddFormComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private authorService: AuthorService,
              private bookService: BooksService) { }

  authors : Author[] = []

  selectedAuthors : Author[] = []

  addBookForm = this.fb.group({
    title: [''],
    description: [''],
    authors: this.fb.array([]),
    creationDate: [''],
    isbn: [''],
    quantity: [''],
    imageUrl: ['']
  })
  
  createItem() {
    return this.fb.group({
      firstName: [''],
      middleName: [''],
      lastName: ['']
    })
  }
  

  ngOnInit(): void {
    this.authorService.getAuthors().subscribe(data => {
      this.authors = data
    })
  }

  onSubmit() {
    if (this.addBookForm.invalid) {
      return;
    }
    this.bookService.postBook( {
    title: this.addBookForm.get('title')?.value,
    description: this.addBookForm.get('description')?.value,
    creationDate: this.addBookForm.get('creationDate')?.value,
    isbn: this.addBookForm.get('isbn')?.value,
    authors: this.addBookForm.get('authors')?.value,
    quantity: this.addBookForm.get('quantity')?.value,
    imageUrl: this.addBookForm.get('imageUrl')?.value
    }).subscribe( data => {
      console.log(data)
    })

  }
}
