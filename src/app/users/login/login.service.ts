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
public getToken() {
  return localStorage.getItem('token')
}
  

  public getUsername() : string | null{
    return localStorage.getItem('username')
  }
  public getToken() {
    return localStorage.getItem('token')
  }
  public getRole() {
    if (localStorage.getItem('role') == null)
      return null
    return localStorage.getItem('role')?.split(',')
  }
  public isAdmin() {
    let roles = this.getRole()
    if (roles == null)
      return false
    else return roles.some(e => e === 'ROLE_ADMIN')
  }
  public isUser() {
    let roles = this.getRole()
    if (roles == null)
      return false
    else return roles.some(e => e === 'ROLE_USER')
  }

  constructor(private http: HttpClient) { }
}
