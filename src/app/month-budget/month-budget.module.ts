import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { MonthBudgetRouter } from './routing/month-budget.router.module';

import { CoreModule } from '../core/core.module';
import { CategoriesModule } from './categories/categories.module';

import { RegisterComponent } from './register/register.component';
import { MonthBudgetComponent } from './month-budget.component';
import { MonthBudgetMainComponent } from './month-budget-main/month-budget-main.component';

@NgModule({
  imports: [
    CoreModule,
    CommonModule,
    RouterModule,
    CategoriesModule
    // MonthBudgetRouter
  ],
  declarations: [
    RegisterComponent,
    MonthBudgetComponent,
    MonthBudgetMainComponent
  ],
  exports: [
    MonthBudgetComponent
  ]
})
export class MonthBudgetModule { }
