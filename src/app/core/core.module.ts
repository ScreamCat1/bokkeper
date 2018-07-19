import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthService } from './shared/auth.service';
import { DateService } from './shared/date.service';
import { WhttpService } from './shared/whttp.service';
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
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    DateService,
    WhttpService,
    AuthGuardService,
    LocalStoreService,
    MonthSpentService
  ],
  exports: [
    HttpClientModule,
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
