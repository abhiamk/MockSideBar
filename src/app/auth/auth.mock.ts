// auth/auth.mock.ts
import { User } from '../models/auth.model';
import { SCREENS, ACTIONS } from './permissions.constants';

export const USERS: User[] = [
  {
    id: 1,
    username: 'admin',
    roles: [
      {
        name: 'ADMIN',
        permissions: [
          { screen: SCREENS.DASHBOARD, actions: [ACTIONS.READ] },
          // { screen: SCREENS.USER, actions: [ACTIONS.READ] }
        ]
      }
    ]
  },
  {
    id: 2,
    username: 'superadmin',
    roles: [
      {
        name: 'SUPER_ADMIN',
        permissions: []
      }
    ]
  }
];
