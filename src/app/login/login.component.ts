import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../core/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.createForm();
   }






  ngOnInit() {
  }





  createForm() {
    this.authService.isAccessAllowed;

    this.loginForm = this.fb.group({
      login:  ['', Validators.required ],
      password:  ['', Validators.required ]
    });
  }

  onSubmit() {
    this.authService.login(this.loginForm);
  }

  disableControl() {
    return true;
  }
}
