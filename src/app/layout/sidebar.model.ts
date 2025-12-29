// sidebar/sidebar.model.ts
import { Screen, Action } from '../auth/permissions.constants';

export interface SidebarHeader {
  title?: string;
  type?: string;
  route?: string;
  screen?: Screen;
  action?: Action;
  children: [];
}

export interface SidebarItem {
  title: string;
  route: string;
  screen: Screen;
  action: Action;
}

export interface SidebarDropdown {
  title: string;
  icon: string;
  type: string;
  children: SidebarItem[];
}

export type SidebarMenu = SidebarHeader | SidebarDropdown;
