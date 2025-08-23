import { createSlice } from "@reduxjs/toolkit";
import { readNavMenu } from "../Thunks/thunksNavMenu";
import { NavDataLink } from "../../Interface/InterfaceNavmenu";

type NavMenuState = {
  items: NavDataLink[];
  loading: boolean;
  error: string | null;
};

const initialState: NavMenuState = {
  items: [],
  loading: false,
  error: null,
};

const navMenuSlice = createSlice({
  name: "navmenu",
  initialState,
  reducers: {
    setNav(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(readNavMenu.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(readNavMenu.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(readNavMenu.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Erreur inconnue";
      });
  },
});

export const { setNav } = navMenuSlice.actions;
export default navMenuSlice.reducer;
