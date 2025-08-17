import { createAsyncThunk } from '@reduxjs/toolkit'
import type { NavMenuResponse,FormData } from '../../Interface/InterfaceNavmenu';
/*add link nav menu*/
export const addNavMenu = createAsyncThunk<
  NavMenuResponse,  //  type de la valeur retournée
  FormData,         //  type du paramètre "credentials"
  { rejectValue: string } // optionnel pour les erreurs
>(
  "navmenu",
  async (credentials, thunkAPI) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/navmenu/addnavmenu`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials)
    });

    if (!response.ok) {
      return thunkAPI.rejectWithValue("Erreur API");
    }

    const data: NavMenuResponse = await response.json();
    return data;
  }
);
