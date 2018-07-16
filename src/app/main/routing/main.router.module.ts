import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from '../main.component';

import { AuthGuardService } from '../../core/shared/auth-guard.service';

const MainRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    canActivate: [AuthGuardService],
    // component: MainComponent,
    redirectTo: '/month-budget'
   }
];

@NgModule({
  imports: [
    RouterModule.forChild(MainRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule {}
