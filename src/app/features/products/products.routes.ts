import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./products.component'),
  },

  {
    path: 'detail/:id',
    loadComponent: () => import('./detail/detail.component'),
  },
] as Routes;
