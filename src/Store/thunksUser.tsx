import { createAsyncThunk } from '@reduxjs/toolkit'
import { setLogin, setRoleUser } from './LoginSlice'

interface LoginPayload {
  name: string
  password: string
  role: string
}

interface LoginResponse {
  token: string
  role: string
}

interface  InscriptionResponse{
  message:string
}

interface InscriptionPayload {
  name:string,
  password:string
}

/*inscription user*/
export const InscriptionUser = createAsyncThunk<InscriptionResponse, InscriptionPayload>('user/inscriptionUser',async (credentials, thunkAPI) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/user/inscription`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials) // <= credentials = { name, password, role }
      })

      const data = await response.json()

      if (!response.ok) {
        // On utilise thunkAPI pour rejeter avec un message d'erreur
        return thunkAPI.rejectWithValue(data.message || 'Erreur lors de l’inscription')
      }

      return data
    } catch (error) {
      return thunkAPI.rejectWithValue('Erreur réseau')
    }
  }
)


/*login user*/
export const loginUser = createAsyncThunk<LoginResponse, LoginPayload>( 'login/loginUser', async (credentials, thunkAPI) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/user/login`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      })

      const data = await response.json()

      if (!response.ok || !data.token) {
        return thunkAPI.rejectWithValue('Nom, mot de passe ou rôle invalide')
      }
  
      thunkAPI.dispatch(setLogin(true))
      thunkAPI.dispatch(setRoleUser(data.role))

      return data
    } catch (error) {
      return thunkAPI.rejectWithValue('Erreur réseau')
    }
  }
)


