import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-book-add-form',
  templateUrl: './book-add-form.component.html',
  styleUrls: ['./book-add-form.component.scss']
})
export class BookAddFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  public authorNum : number = 0

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

  getAuthorsArray() : FormArray {
    return this.addBookForm.get('authors') as FormArray
  }
  
  addNext() {
    (this.addBookForm.controls['authors'] as FormArray).push(this.createItem())
  }

  addAuthor(): void {
    this.authorNum += 1
    this.addNext()
  }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
