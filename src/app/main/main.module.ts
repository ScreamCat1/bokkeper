import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MainRoutingModule } from './routing/main.router.module';

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
    MainRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
