// auth/permissions.constants.ts
export const SCREENS = {
  DASHBOARD: 'DASHBOARD',
  USER: 'USER'
} as const;

export const ACTIONS = {
  READ: 'READ',
  WRITE: 'WRITE',
  DELETE: 'DELETE'
} as const;

export type Screen = typeof SCREENS[keyof typeof SCREENS];
export type Action = typeof ACTIONS[keyof typeof ACTIONS];
