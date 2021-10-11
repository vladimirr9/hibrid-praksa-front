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

  getBooks(page:number, pageSize: number): Observable<Book[]> {
    return this.http.get<Book[]>(`${config.baseUrl}${this.booksUrl}`, {
      params: {
          page: page,
          pageSize: pageSize
      }
    })
  }
  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(`${config.baseUrl}${this.booksUrl}${id}`)

  }
}
