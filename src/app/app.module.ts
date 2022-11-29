import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewNewsComponent } from './view-news/view-news.component';
import { AddnewComponent } from './addnew/addnew.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'

const myRoute : Routes = [
  {
    path:"",
    component:AddnewComponent
  },
  {
    path:"view",
    component:ViewNewsComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ViewNewsComponent,
    AddnewComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
