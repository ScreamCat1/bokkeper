import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from '../main.component';

import { AuthGuardService } from '../../core/shared/auth-guard.service';
import { MonthBudgetMainComponent } from '../../month-budget/month-budget-main/month-budget-main.component';
import { RegisterComponent } from '../../month-budget/register/register.component';
import { DepositesComponent } from '../../deposites/deposites.component';
import { MonthBudgetComponent } from '../../month-budget/month-budget.component';

const MainRoutes: Routes = [
  {
    path: 'main',
    canActivate: [AuthGuardService],
    component: MainComponent,
    children: [
      {
        path: 'month-budget',
        component: MonthBudgetComponent,
        children: [
          {
            path: '',
            component: RegisterComponent
          },
          {
            path: 'main',
            component: MonthBudgetMainComponent
          }
        ]
      },
      {
        path: 'deposites',
        component: DepositesComponent
      }
    ]
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
