import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './Slice' // chemin vers ton slice

export const store = configureStore({
  reducer: {
    login: loginReducer, // login est le nom dans le state Redux
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
