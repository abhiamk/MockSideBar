import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SideBarService } from '../side-bar-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-side-bar-component',
  imports: [CommonModule, FormsModule, RouterModule, RouterLink],
  templateUrl: './side-bar-component.html',
  styleUrl: './side-bar-component.scss',
  animations: [
    trigger('slide', [
      state('up', style({
        height: '0',
        overflow: 'hidden',
        opacity: 0
      })),
      state('down', style({
        height: '*',
        opacity: 1
      })),
      transition('up <=> down', animate('250ms ease'))
    ])
  ]
})
export class SideBarComponent {
  menus: any[] = [];

  constructor(public sideBarService: SideBarService, private router: Router) {
    this.menus = sideBarService.getMenuList();
  }

  toggleSidebar() {
    this.sideBarService.toggled.update(v => !v);
  }

  ngOnInit() {
  }

  getSideBarState() {
    return this.sideBarService.getSidebarState();
  }

  toggle(currentMenu: any) {
    if (currentMenu.type === 'dropdown') {
      this.menus.forEach(element => {
        if (element === currentMenu) {
          currentMenu.active = !currentMenu.active;
        } else {
          element.active = false;
        }
      });
    }
  }

  getState(currentMenu: any) {

    if (currentMenu.active) {
      return 'down';
    } else {
      return 'up';
    }
  }

  hasBackgroundImage() {
    return this.sideBarService.hasBackgroundImage;
  }

  isActive(route: string) {
    return this.sideBarService.isActive(route, this.router.url);
  }
}
