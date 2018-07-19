import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepositesComponent } from './deposites.component';

// import { DepositesRoutingModule } from './routing/deposites.router.module';
import { ListComponent } from './list/list.component';
import { DepositComponent } from './deposit/deposit.component';

@NgModule({
  imports: [
    CommonModule,
    // DepositesRoutingModule
  ],
  declarations: [DepositesComponent, ListComponent, DepositComponent],
  exports: [
    DepositesComponent
  ]
})
export class DepositesModule { }
