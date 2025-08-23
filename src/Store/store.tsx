import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './Slice/LoginSlice'
import   navMenuSlice from "./Slice/NavSlice"

export const store = configureStore({
  reducer: {
    login: loginReducer,
    navMenuSlice:navMenuSlice
    // autres reducers...
  },
})

// Types Redux
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
