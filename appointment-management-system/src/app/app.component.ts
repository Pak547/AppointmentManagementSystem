// src/app/app.component.ts
import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="auth.isAuthenticated$ | async">
      <h1>Welcome, {{ auth.user$ | async?.name }}!</h1>
      <!-- Your authenticated content -->
    </div>
    <div *ngIf="!(auth.isAuthenticated$ | async)">
      <button (click)="auth.loginWithRedirect()">Log In</button>
    </div>
  `,
})
export class AppComponent {
  constructor(public auth: AuthService) {}
}
