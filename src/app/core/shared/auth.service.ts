import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { WhttpService } from './whttp.service';

interface Response {
  login: string;
  password: string;
}
@Injectable()
export class AuthService {
  isAccessAllowed = false;

  constructor(
    private http: WhttpService,
    private router: Router
  ) {}

  login({ value : { login, password }}) {
    this.http.getLoginCred().subscribe((response: Response) => {
      this.isAccessAllowed = login === response.login && password === response.password;
      this.router.navigate(['/main']);
    });
  }
}
