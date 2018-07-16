import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../login.component';

const LoginRoutes: Routes = [
  { path: 'main', pathMatch: 'full', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(LoginRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LoginRoutingModule {}
