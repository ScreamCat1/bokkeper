import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './shared/auth.service';
import { AuthGuardService } from './shared/auth-guard.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    AuthGuardService
  ]
})
export class CoreModule { }
