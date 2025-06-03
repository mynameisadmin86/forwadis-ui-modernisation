
export const APP_CONFIG = {
  app: {
    name: 'TaskFlow Pro',
    version: '1.0.0',
    description: 'Professional Task Management Application',
  },
  api: {
    baseUrl: process.env.NODE_ENV === 'production' 
      ? 'https://api.taskflow.com' 
      : 'http://localhost:3001',
    timeout: 10000,
    retryAttempts: 3,
  },
  ui: {
    debounceDelay: 300,
    animationDuration: 200,
    toastDuration: 3000,
    itemsPerPage: 10,
  },
  storage: {
    keys: {
      user: 'taskflow_user',
      preferences: 'taskflow_preferences',
      theme: 'taskflow_theme',
    },
  },
} as const;

export const TASK_STATUS = {
  TODO: 'todo',
  IN_PROGRESS: 'in_progress',
  REVIEW: 'review',
  COMPLETED: 'completed',
} as const;

export const TASK_PRIORITY = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
  URGENT: 'urgent',
} as const;

export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  TASKS: '/tasks',
  ANALYTICS: '/analytics',
  SETTINGS: '/settings',
} as const;
