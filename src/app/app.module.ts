import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { ApplicationRoutes } from './app.routing';
import { MenuComponent } from './menu/menu.component';
import { CategoryComponent } from './category/category.component';
import { NewestIdeasComponent } from './newest-ideas/newest-ideas.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CategoryComponent,
    NewestIdeasComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ApplicationRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

