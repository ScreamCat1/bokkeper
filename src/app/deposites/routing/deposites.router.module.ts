import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DepositesComponent } from '../deposites.component';

const DepositesRoutes: Routes = [
  { path: 'deposites', pathMatch: 'full', component: DepositesComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(DepositesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DepositesRoutingModule {}
