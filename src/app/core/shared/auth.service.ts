import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  isAccessAllowed = false;

  constructor(
    private router: Router
  ) {}

  login({ value : { login, password }}) {
    this.isAccessAllowed = login === '1' && password === '1';
    this.router.navigate(['/main']);
  }
}
