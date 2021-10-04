import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './book';
import { Observable } from 'rxjs';
import config from '../shared.json';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  
  private booksUrl = 'api/v1/books'
  constructor(
    private http: HttpClient) { }
  


    getBooks(): Observable<any[]> {
      return this.http.get<any[]>(`${config.baseUrl}api/v1/books`)
    }
}
