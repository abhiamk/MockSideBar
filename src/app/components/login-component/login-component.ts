import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth-service';

@Component({
  selector: 'app-login-component',
  imports: [],
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss',
})
export class LoginComponent {

  constructor(private auth: AuthService, private router: Router) { }

  login(username: string) {
    if (this.auth.login(username)) {
      this.router.navigateByUrl(this.auth.redirectUrl || '/dashboard');
    }
  }
}
