import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  const isAuthenticated = !!authService.token();

  if (!isAuthenticated) {
    router.navigate(['/']);
    return false;
  }
  
  return true;
};
