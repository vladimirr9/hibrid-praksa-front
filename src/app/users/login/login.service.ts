import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public isLoggedIn(): boolean {
    return  localStorage.getItem('username') != null
}
  constructor() { }
}
