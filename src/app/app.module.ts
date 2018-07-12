import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot([], { enableTracing: true }),
    BrowserModule,
    MatCheckboxModule,
    BrowserAnimationsModule,

    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
