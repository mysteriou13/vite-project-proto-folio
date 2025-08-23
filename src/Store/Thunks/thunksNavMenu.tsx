import { createAsyncThunk } from '@reduxjs/toolkit'
import type { NavMenuResponse, NavDataLink } from '../../Interface/InterfaceNavmenu';
/*add link nav menu*/
export const addNavMenu = createAsyncThunk<
  NavMenuResponse,  //  type de la valeur retournée
  NavDataLink         //  type du paramètre "credentials"
  
>(
  "navmenu",
  async (credentials, thunkAPI) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/navmenu/addnavmenu`, {
      method: 'POST',
      headers: {
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

/*read link navmenu*/
export const readNavMenu = createAsyncThunk<NavDataLink[]>(
  "readnav",
  async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/navmenu/readnavmenu`);
    const data: NavDataLink[] = await response.json();

    return data; // ← Redux Toolkit mettra ça dans action.payload automatiquement
  }
);