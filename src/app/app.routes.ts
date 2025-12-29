import { Routes } from '@angular/router';
import { Unauthorized } from './components/Unauthorized/unauthorized/unauthorized';
import { LoginComponent } from './components/login-component/login-component';
import { authGuard } from './guards/auth-guard';
import { permissionGuard } from './guards/permission-guard';
import { ACTIONS, SCREENS } from './auth/permissions.constants';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () => import('./layout/main-component/main-component').then(m => m.MainComponent),
    children: [
      {
        path: 'dashboard',
        canActivate: [permissionGuard],
        data: { screen: SCREENS.DASHBOARD, action: ACTIONS.READ },
        loadComponent: () => import('./components/dashboard/dashboard').then(m => m.Dashboard)
      },
      {
        path: 'user',
        canActivate: [permissionGuard],
        data: { screen: SCREENS.USER, action: ACTIONS.READ },
        loadComponent: () =>
          import('./components/user/user')
            .then(m => m.User)
      },
      {
        path: 'user/:id',
        canActivate: [permissionGuard],
        data: { screen: SCREENS.USER, action: ACTIONS.READ },
        loadComponent: () =>
          import('./components/user-details/user-details')
            .then(m => m.UserDetails)
      }
    ]
  },
  { path: 'unauthorized', component: Unauthorized },
  { path: '**', redirectTo: 'login' }


];
