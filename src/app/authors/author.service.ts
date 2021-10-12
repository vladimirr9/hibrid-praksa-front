import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from './author';
import  config  from './../shared.json'

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private authorsUrl : string = '/authors/'

  constructor(private http: HttpClient) { }


  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(`${config.baseUrl}${this.authorsUrl}`)
  }
}
