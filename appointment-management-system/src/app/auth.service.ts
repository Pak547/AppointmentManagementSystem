import { Injectable } from '@angular/core';
import { AuthService as Auth0AuthService, LogoutOptions } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated$ = this.auth0.isAuthenticated$;
  user$ = this.auth0.user$;

  constructor(private auth0: Auth0AuthService) {}

  login(): void {
    this.auth0.loginWithRedirect();
  }

  logout(): void {
    this.auth0.logout({ returnTo: window.location.origin } as LogoutOptions);
  }
}

