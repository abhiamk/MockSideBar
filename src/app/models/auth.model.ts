// models/auth.model.ts
import { Screen, Action } from '../auth/permissions.constants';

export interface Permission {
  screen: Screen;
  actions: Action[];
}

export interface Role {
  name: string;
  permissions: Permission[];
}

export interface User {
  id: number;
  username: string;
  roles: Role[];
}
