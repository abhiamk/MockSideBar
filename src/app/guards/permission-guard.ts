// guards/permission.guard.ts
import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../auth/auth-service';

export const permissionGuard: CanActivateFn = (route) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  const { screen, action } = route.data || {};
  if (!auth.hasPermission(screen, action)) {
    router.navigate(['/unauthorized'], { replaceUrl: true });
    return false;
  }
  return true;
};
