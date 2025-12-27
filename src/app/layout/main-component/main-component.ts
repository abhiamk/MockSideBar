import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { SideBarComponent } from '../side-bar-component/side-bar-component';
import { SideBarService } from '../side-bar-service';
import { NavBarComponent } from '../nav-bar-component/nav-bar-component';

@Component({
  selector: 'app-main-component',
  imports: [SideBarComponent, NavBarComponent, RouterOutlet, CommonModule,
    RouterModule, RouterOutlet],
  templateUrl: './main-component.html',
  styleUrl: './main-component.scss',
})
export class MainComponent {
  toggled: boolean;

  constructor(public sideBarService: SideBarService) {
    this.toggled = this.sideBarService.toggled();
  }

  toggleSidebar() {
    this.sideBarService.toggled.update(v => !v);
  }

  toggleBackgroundImage() {
    this.sideBarService.hasBackgroundImage = !this.sideBarService.hasBackgroundImage;
  }

  getSideBarState() {
    return this.sideBarService.toggled();
  }

  hideSidebar() {
    this.sideBarService.setSidebarState(true);
  }
}
