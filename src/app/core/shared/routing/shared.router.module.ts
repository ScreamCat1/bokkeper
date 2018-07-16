import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PopupComponent } from '../popup/popup.component';

const SharedRoutes: Routes = [
  {
    path: 'popup',
    outlet: 'popup',
    component: PopupComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(SharedRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SharedRouter {}
