import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { loginUser } from '../Thunks/thunksUser'

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
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false
        state.login = true
        state.role = action.payload.role || ''
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  }
})

export const { setLogin, setRoleUser } = loginSlice.actions
export default loginSlice.reducer
