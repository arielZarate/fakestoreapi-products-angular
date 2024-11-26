import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    //NOTA: NO PONERLE BARRAS / A LOS REDIRECTO :(

    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },

  {
    path: '',
    loadChildren: () => import('./features/products/products.routes'),
  },

  {
    path: '**',
    redirectTo: 'products',
    pathMatch: 'full',
  },
];
