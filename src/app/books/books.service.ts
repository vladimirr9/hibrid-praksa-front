import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import config from '../shared.json';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private booksUrl = 'api/v1/books/'
  constructor(
    private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${config.baseUrl}${this.booksUrl}`)
  }
  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(`${config.baseUrl}${this.booksUrl}${id}`)

  }
}
