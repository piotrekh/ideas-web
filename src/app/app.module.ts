import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { ApplicationRoutes } from './app.routing';
import { MenuComponent } from './menu/menu.component';
import { CategoryComponent } from './category/category.component';
import { NewestIdeasComponent } from './newest-ideas/newest-ideas.component';

import { ApiService } from './shared/services/api.service';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CategoryComponent,
    NewestIdeasComponent,
    LoginComponent,
    MainComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ApplicationRoutes)  ,
    HttpModule  
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

