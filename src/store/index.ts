
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { tasksApi } from './api/tasksApi';
import { usersApi } from './api/usersApi';
import uiReducer from './slices/uiSlice';
import authReducer from './slices/authSlice';
import tasksReducer from './slices/tasksSlice';

export const store = configureStore({
  reducer: {
    // API reducers
    [tasksApi.reducerPath]: tasksApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    
    // Local state reducers
    ui: uiReducer,
    auth: authReducer,
    tasks: tasksReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
        ],
      },
    })
      .concat(tasksApi.middleware)
      .concat(usersApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Console logging for debugging
console.log('🏪 Redux store initialized with middleware:', {
  apis: [tasksApi.reducerPath, usersApi.reducerPath],
  slices: ['ui', 'auth', 'tasks'],
  timestamp: new Date().toISOString(),
});
