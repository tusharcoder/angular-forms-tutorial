/**
* @Author: Tushar Agarwal <Tushar>
* @Date:   2016-12-30T00:20:14+05:30
* @Email:  tamyworld@gmail.com
* @Filename: app.module.ts
* @Last modified by:   Tushar
* @Last modified time: 2016-12-30T01:01:27+05:30
*/



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {SimpleFormComponent} from './app.simpleform'
import {ComplexFormComponent} from './app.complexform'
import {FormValidationComponent} from './app.formvalidations'

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    ComplexFormComponent,
    FormValidationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
