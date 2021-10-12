import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import config from "./../../shared.json"

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  

  public isLoggedIn(): boolean {
    return  localStorage.getItem('username') != null
}
  

  public getUsername() : string | null{
    return localStorage.getItem('username')
  }
  public getToken() {
    return localStorage.getItem('token')
  }

  constructor(private http: HttpClient) { }
}
