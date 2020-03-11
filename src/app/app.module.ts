import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {BsDatepickerModule, DatepickerModule} from 'ngx-bootstrap';
@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule,BrowserAnimationsModule,
  BsDatepickerModule.forRoot(),DatepickerModule.forRoot()],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
