import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './Slice/LoginSlice';
import navMenuSlice from './Slice/NavSlice';
import  ApiNavMenu   from './api/ApiNavMenu'; // ton createApi
import ApiUser from './api/ApiUser';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    navMenuSlice: navMenuSlice,
    [ApiNavMenu.reducerPath]: ApiNavMenu.reducer, // ajoute le slice RTK Query
    [ApiUser.reducerPath]:ApiUser.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiNavMenu.middleware).concat(ApiUser.middleware)
});
