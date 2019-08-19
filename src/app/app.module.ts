import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CustomMaterialModuleModule } from './custom-material-module.module';
// 动画包
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ArbitritionComponent } from './arbitrition/arbitrition.component';


@NgModule({
   declarations: [
      AppComponent,
      ArbitritionComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      CustomMaterialModuleModule,
      BrowserAnimationsModule,
      FormsModule,
      HttpClientModule,
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
