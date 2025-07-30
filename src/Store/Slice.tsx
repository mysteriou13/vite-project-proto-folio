import { createSlice, PayloadAction } from '@reduxjs/toolkit'


// Définir un type pour l'état du slice
export interface LoginState {
  login: boolean
}

// État initial
const initialState: LoginState = {
  login: false
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<boolean>) => {
      state.login = action.payload
    },
    
  }
})

export const { setLogin } = loginSlice.actions


export default loginSlice.reducer
