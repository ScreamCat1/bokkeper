import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DepositesModule } from '../deposites/deposites.module';
import { MainRoutingModule } from './routing/main.router.module';
import { MonthBudgetModule } from '../month-budget/month-budget.module';

import { MainService } from './shared/main.service';

import { MainComponent } from './main.component';


@NgModule({
  declarations: [
    MainComponent
  ],
  providers: [
    MainService
  ],
  imports: [
    DepositesModule,
    MonthBudgetModule,
    MainRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
