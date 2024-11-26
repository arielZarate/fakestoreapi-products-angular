import { Routes } from '@angular/router';

export const routesProducts: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./products.component').then((c) => c.ProductsComponent),
  },

  {
    path: 'detail/:id',
    loadComponent: () =>
      import('./detail/detail.component').then((c) => c.DetailComponent),
  },
] as Routes;
