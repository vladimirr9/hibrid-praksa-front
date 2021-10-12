import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import config from '../shared.json';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loginUrl = "/auth/login"
  private profileUrl = "/users/profile"
  constructor(private http: HttpClient) { }

  public login(username: string, password: string) {
    return this.http.post<any>(`${config.baseUrl}${this.loginUrl}`, {
      username: username,
      password: password
    })
  }

  public logout() {
    localStorage.removeItem('username')
    localStorage.removeItem('token')
    localStorage.removeItem('firstName')
    localStorage.removeItem('lastName')
    localStorage.removeItem('role')
  }

  public getProfile() {
    return this.http.get(`${config.baseUrl}${this.profileUrl}`).subscribe((data:any) => {
      localStorage.setItem('firstName', data.firstName)
      localStorage.setItem('lastName', data.lastName)
      localStorage.setItem('role', data.role)
    })
  }
}
