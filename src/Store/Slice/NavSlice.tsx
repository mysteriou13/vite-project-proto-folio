import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LinkNav } from "../../Interface/InterfaceNavmenu";

type NavState = {
  linknav: { data: LinkNav[] };
};

const initialState: NavState = {
  linknav: { data: [] },
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setNav: (state, action: PayloadAction<{ data: LinkNav[] }>) => {
      state.linknav = action.payload;
    },
    removeNavLink: (state, action: PayloadAction<string>) => {
      state.linknav.data = state.linknav.data.filter(
        (link) => link._id !== action.payload
      );
    },
  },
});

export const { setNav, removeNavLink } = navSlice.actions;
export default navSlice.reducer;
