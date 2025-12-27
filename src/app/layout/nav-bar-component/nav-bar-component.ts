import { Component, computed, OnInit, signal } from '@angular/core';
import { SideBarService } from '../side-bar-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar-component',
  imports: [CommonModule],
  templateUrl: './nav-bar-component.html',
  styleUrl: './nav-bar-component.scss',
})
export class NavBarComponent implements OnInit {

  now = signal(new Date());

  presentDate = computed(() => this.now().toLocaleDateString());
  presentTime = computed(() => this.now().toLocaleTimeString());

  constructor(public sideBarService: SideBarService) {
  }

  ngOnInit() {
    setInterval(() => this.now.set(new Date()), 1000);
  }

  toggleSidebar() {
    this.sideBarService.toggled.update(v => !v);
  }

}
