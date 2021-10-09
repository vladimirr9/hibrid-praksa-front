import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import config from '../shared.json';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loginUrl = "api/v3/auth/login"
  constructor(private http: HttpClient) { }

  public login(username: string, password: string) {
    return this.http.post<any>(`${config.baseUrl}${this.loginUrl}`, {
      username: username,
      password: password
    }).subscribe(user => {
      localStorage.setItem('username', user.username)
      localStorage.setItem('token', user.token)
    })
  }
  public logout() {
    localStorage.removeItem('username')
    localStorage.removeItem('token')
  }
}
