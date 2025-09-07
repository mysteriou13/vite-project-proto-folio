import { createSlice } from "@reduxjs/toolkit";
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

});

export const { setNav } = navMenuSlice.actions;
export default navMenuSlice.reducer;
