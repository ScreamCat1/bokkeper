import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from '../main.component';

const MainRouters: Routes = [
  { path: '', pathMatch: 'full', component: MainComponent }
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
