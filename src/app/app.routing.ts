import { Routes } from '@angular/router'

import { CategoryComponent } from './category/category.component'
import { NewestIdeasComponent } from './newest-ideas/newest-ideas.component'
import { LoginComponent } from './login/login.component'
import { MainComponent } from './main/main.component'

export const ApplicationRoutes: Routes = [
    {
      path: '',
      component: MainComponent,
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
        }
      ]
      
    },    
    {
      path: 'login',
      component: LoginComponent
    }
  ]