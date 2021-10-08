import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import config from '../shared.json';
import { BookCopy } from './bookcopy';

@Injectable({
  providedIn: 'root'
})
export class RentService {

  private rentUrl = 'api/v3/rent/'
  constructor(private http: HttpClient) { }


    rent(bookId: number): Observable<BookCopy> {
      return this.http.post<BookCopy>(`${config.baseUrl}${this.rentUrl}`, {'bookId': bookId})
    }
  


}
