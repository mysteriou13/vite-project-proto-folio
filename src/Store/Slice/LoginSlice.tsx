import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


interface LoginState {
  login: boolean
  role: string
  loading: boolean
  error: string | null
}

const initialState: LoginState = {
  login: false,
  role: '',
  loading: false,
  error: null
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLogin(state, action:PayloadAction<boolean>) {
      state.login = action.payload
    },
    setRoleUser(state, action:PayloadAction<string>) {
      state.role = action.payload
    }
  },

})

export const { setLogin, setRoleUser } = loginSlice.actions
export default loginSlice.reducer
