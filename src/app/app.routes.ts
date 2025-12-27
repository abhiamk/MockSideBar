import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/main-component/main-component').then(m => m.MainComponent),
    children: [
      { path: 'dashboard', loadComponent: () => import('./components/dashboard/dashboard').then(m => m.Dashboard) },
    ]
  }
];
