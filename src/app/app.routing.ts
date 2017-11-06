import { Routes } from '@angular/router';

import { CategoryComponent } from './category/category.component';
import { NewestIdeasComponent } from './newest-ideas/newest-ideas.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { IdeaDetailsComponent } from './idea-details/idea-details.component';

import { AuthGuard } from './shared/guards/auth.guard';

export const ApplicationRoutes: Routes = [
    {
      path: '',
      component: MainComponent,
      canActivate: [
        AuthGuard
      ],
      children: [
        {
          path: '',
          redirectTo: '/newest',
          pathMatch: 'full'
        },
        {
          path: 'newest',
          component: NewestIdeasComponent
        },
        {
          path: 'category/:id',
          component: CategoryComponent
        },
        {
          path: 'idea/:id',
          component: IdeaDetailsComponent
        }
      ]
      
    },    
    {
      path: 'login',
      component: LoginComponent
    }
  ]