// auth/auth.service.ts
import { Injectable, signal, computed } from '@angular/core';
import { USERS } from './auth.mock';
import { Action, Screen } from './permissions.constants';
import { User } from '../models/auth.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _user = signal<User | null>(this.loadUser());
  redirectUrl: string | null = null;

  user = computed(() => this._user());

  login(username: string): boolean {
    const found = USERS.find(u => u.username === username);
    if (!found) return false;

    this._user.set(found);
    localStorage.setItem('user', JSON.stringify(found));
    return true;
  }

  logout() {
    this._user.set(null);
    localStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
    return !!this._user();
  }

  hasPermission(screen: Screen, action: Action): boolean {
    const user = this._user();
    if (!user || !user.roles?.length) return false;

    // 🔑 SUPER ADMIN OVERRIDE
    if (user.roles.some(r => r.name === 'SUPER_ADMIN')) {
      return true;
    }

    return user.roles.some(role =>
      role.permissions.some(p =>
        p.screen === screen && p.actions.includes(action)
      )
    );
  }

  private loadUser(): User | null {
    const u = localStorage.getItem('user');
    return u ? JSON.parse(u) : null;
  }
}
