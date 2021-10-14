import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import config from '../shared.json';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private booksUrl = '/books/'
  constructor(
    private http: HttpClient) { }

  getBooks(params : any): Observable<Book[]> {

    return this.http.get<Book[]>(`${config.baseUrl}${this.booksUrl}`, {
      params: params
    })
  }

  postBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${config.baseUrl}${this.booksUrl}`, {
      title: book.title,
      description: book.description,
      authors: book.authors,
      creationDate: book.creationDate,
      isbn: book.isbn,
      quantity: book.quantity,
      imageUrl: book.imageUrl
    })
  }
  putBook(id: number, book: Book): Observable<Book> {
    return this.http.put<Book>(`${config.baseUrl}${this.booksUrl}${id}`, {
      title: book.title,
      description: book.description,
      authors: book.authors,
      creationDate: book.creationDate,
      isbn: book.isbn,
      quantity: book.quantity,
      imageUrl: book.imageUrl
    })
  }
  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(`${config.baseUrl}${this.booksUrl}${id}`)
  }
}
