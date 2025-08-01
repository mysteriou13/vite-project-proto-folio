import { createSlice, PayloadAction } from '@reduxjs/toolkit'


// Définir un type pour l'état du slice
export interface LoginState {
  login: boolean,
  role:string
}

// État initial
const initialState: LoginState = {

    login: false,
    role:"",

  }

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<boolean>) => {
      state.login = action.payload
    },

    setRoleUser: (state, action: PayloadAction<string>) =>{
      state.role = action.payload
    }
    
  }
})

export const { setLogin,setRoleUser } = loginSlice.actions


export default loginSlice.reducer
