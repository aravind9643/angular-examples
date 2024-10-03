import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const user = localStorage.getItem("user");
  if (user)
    return true;
  window.location.href = "/login";
  return false;
};
