import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './Slice/LoginSlice';
import navMenuSlice from './Slice/NavSlice';
import ApiNavMenu from './api/ApiNavMenu';
import ApiUser  from './api/ApiUser';
import ApiContact from './api/ApiContact';
import ApiData from './api/apiData';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    navMenuSlice: navMenuSlice,
    [ApiNavMenu.reducerPath]: ApiNavMenu.reducer,
    [ApiUser.reducerPath]: ApiUser.reducer,
    [ApiData.reducerPath]: ApiData.reducer,
    [ApiContact.reducerPath]:ApiContact.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(ApiNavMenu.middleware)
      .concat(ApiUser.middleware)
      .concat(ApiContact.middleware)
      .concat(ApiData.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
