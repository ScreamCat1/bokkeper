import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from '../main.component';

import { AuthGuardService } from '../../core/shared/auth-guard.service';

const MainRouters: Routes = [
  {
    path: 'main',
    pathMatch: 'full',
    canActivate: [AuthGuardService],
    component: MainComponent
   }
];

@NgModule({
  imports: [
    RouterModule.forChild(MainRouters)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule {}
