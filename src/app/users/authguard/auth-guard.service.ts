import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private loginService : LoginService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let currentUser = this.loginService.getUsername()
    if (currentUser) {
      return true
    }
    this.router.navigateByUrl("/login")
    return false;
  }
}
