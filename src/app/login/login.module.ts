import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './routing/login.router.module';


import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  providers: [],
  imports: [
    LoginRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
