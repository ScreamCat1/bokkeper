import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthService } from './shared/auth.service';
import { DateService } from './shared/date.service';
import { SharedRouter } from './shared/routing/shared.router.module';
import { AuthGuardService } from './shared/auth-guard.service';
import { LocalStoreService } from './shared/local-store.service';
import { MonthSpentService } from './shared/month-spent.service';

import { PopupComponent } from './shared/popup/popup.component';
import { ClosePopupDirective } from './shared/directives/close-popup.directive';

@NgModule({
  imports: [
    CommonModule,
    SharedRouter,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    DateService,
    AuthGuardService,
    LocalStoreService,
    MonthSpentService
  ],
  exports: [
    ReactiveFormsModule,

    PopupComponent,

    ClosePopupDirective
  ],
  declarations: [
    PopupComponent,
    ClosePopupDirective
  ]
})
export class CoreModule { }
