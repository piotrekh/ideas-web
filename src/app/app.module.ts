import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { LoadingModule } from 'ngx-loading';
import { ngxLoadingConfig } from './shared/config/ngx-loading.config';
import { TagInputModule } from 'ngx-chips';

import { AppComponent } from './app.component';
import { ApplicationRoutes } from './app.routing';
import { MenuComponent } from './menu/menu.component';
import { CategoryComponent } from './category/category.component';
import { NewestIdeasComponent } from './newest-ideas/newest-ideas.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

import { StorageService } from './shared/services/storage.service';
import { ApiService } from './shared/services/api.service';
import { AuthService } from './shared/services/auth.service';

import { AuthGuard } from './shared/guards/auth.guard';
import { NavbarComponent } from './navbar/navbar.component';
import { IdeaCardComponent } from './idea-card/idea-card.component';
import { IdeaDetailsComponent } from './idea-details/idea-details.component';
import { IdeaFormComponent } from './idea-form/idea-form.component';
import { DropdownComponent } from './controls/dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CategoryComponent,
    NewestIdeasComponent,
    LoginComponent,
    MainComponent,
    NavbarComponent,
    IdeaCardComponent,
    IdeaDetailsComponent,
    IdeaFormComponent,
    DropdownComponent 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(ApplicationRoutes),
    HttpModule,
    LoadingModule.forRoot(ngxLoadingConfig),
    TagInputModule
  ],
  providers: [
    StorageService,
    ApiService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

