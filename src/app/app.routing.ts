import { Routes } from '@angular/router'

import { CategoryComponent } from './category/category.component';
import { NewestIdeasComponent } from './newest-ideas/newest-ideas.component';

export const ApplicationRoutes: Routes = [
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