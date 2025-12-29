// sidebar/sidebar.menu.ts
import { SidebarMenu } from './sidebar.model';
import { SCREENS, ACTIONS } from '../auth/permissions.constants';

export const SIDEBAR_MENU: SidebarMenu[] = [
  {
    title: 'General',
    type: 'header',
    children: [],
  },
  {
    title: 'Dashboard',
    icon: 'fa fa-home',
    type: 'dropdown',
    children: [
      {
        title: 'Dashboard',
        route: 'dashboard',
        screen: SCREENS.DASHBOARD,
        action: ACTIONS.READ
      }
    ]
  },
  {
    title: 'Users',
    icon: 'fa fa-users',
    type: 'dropdown',
    children: [
      {
        title: 'User List',
        route: 'user',
        screen: SCREENS.USER,
        action: ACTIONS.READ
      },
      //  {
      //   title: 'User Details',
      //   route: 'userDetails',
      //   screen: SCREENS.USER,
      //   action: ACTIONS.READ
      // }
    ]
  }
];
