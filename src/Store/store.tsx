import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './Slice/LoginSlice';
import navMenuSlice from './Slice/NavSlice';
import  ApiNavMenu   from './api/ApiNavMenu/ApiNavMenu'; // ton createApi

export const store = configureStore({
  reducer: {
    login: loginReducer,
    navMenuSlice: navMenuSlice,
    [ApiNavMenu.reducerPath]: ApiNavMenu.reducer, // ajoute le slice RTK Query
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiNavMenu.middleware), // middleware nécessaire pour RTK Query
});
