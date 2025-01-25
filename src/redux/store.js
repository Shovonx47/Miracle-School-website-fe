import { configureStore } from '@reduxjs/toolkit';
import { apiService } from './services/apiService';
import { setupListeners } from '@reduxjs/toolkit/query';
import missionVisionReducer from './features/missionVisionSlice';

export const store = configureStore({
  reducer: {
    missionVision: missionVisionReducer,
    [apiService.reducerPath]: apiService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiService.middleware),
});

setupListeners(store.dispatch);