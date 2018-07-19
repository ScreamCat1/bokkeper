import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
 } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkoutLogin(state.url);
  }

  private checkoutLogin(url) {
    if (this.authService.isAccessAllowed) {
      return true;
    }

    this.router.navigate(['']);
    return false;
  }
}
