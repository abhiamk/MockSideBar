import { computed, Injectable, signal } from '@angular/core';
import { ACTIONS, SCREENS } from '../auth/permissions.constants';
import { SIDEBAR_MENU } from './sidebar.menu';
import { AuthService } from '../auth/auth-service';
import { SidebarMenu } from './sidebar.model';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {
  toggled = signal(false);
  _hasBackgroundImage = true;
  constructor(private auth: AuthService) { }

  menus = computed<SidebarMenu[]>(() =>
    SIDEBAR_MENU
      .map(menu => {
        if (menu.type === 'header') return menu;

        const children = menu.children.filter(c =>
          this.auth.hasPermission(c.screen, c.action)
        );

        return children.length ? { ...menu, children } : null;
      })
      .filter((m): m is SidebarMenu => m !== null)
  );

  isActive(route: string, url: string) {
    return url.startsWith(route);
  }


  toggle() {
    this.toggled.set(!this.toggled);
  }

  getSidebarState() {
    return this.toggled();
  }

  setSidebarState(state: boolean) {
    this.toggled.set(state);
  }

  getMenuList() {
    return this.menus();
  }

  get hasBackgroundImage() {
    return this._hasBackgroundImage;
  }

  set hasBackgroundImage(hasBackgroundImage) {
    this._hasBackgroundImage = hasBackgroundImage;
  }
}
