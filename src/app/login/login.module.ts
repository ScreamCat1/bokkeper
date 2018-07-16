import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './routing/login.router.module';

import { CoreModule } from '../core/core.module';

import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  providers: [],
  imports: [
    CoreModule,
    LoginRoutingModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
