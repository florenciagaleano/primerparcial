import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);

  if(auth.getCurrentUser() != null && auth.getCurrentUser() != "") {
    return true;
  }

  alert("Usuario no reconocido");
  return  false;
};
