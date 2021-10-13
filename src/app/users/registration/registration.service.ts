import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import config from './../../shared.json'

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private registerUrl = "/auth/register"
  constructor(private http: HttpClient) { }

  public register(username: string, password: string, firstName: string, lastName: string) {
    return this.http.post<any>(`${config.baseUrl}${this.registerUrl}`, {
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName
    })
  }
  
}
