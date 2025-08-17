import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './Slice/LoginSlice'

export const store = configureStore({
  reducer: {
    login: loginReducer,
    // autres reducers...
  },
})

// Types Redux
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
