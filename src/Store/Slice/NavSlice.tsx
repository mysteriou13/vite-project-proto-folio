import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LinkNav } from "../../Interface/InterfaceNavmenu";

type NavState = {
  items: { data: LinkNav[] };
};

const initialState: NavState = {
  items: { data: [] },
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setNav: (state, action: PayloadAction<{ data: LinkNav[] }>) => {
      state.items = action.payload;
    },
    removeNavLink: (state, action: PayloadAction<string>) => {
      state.items.data = state.items.data.filter(
        (link) => link._id !== action.payload
      );
    },
  },
});

export const { setNav, removeNavLink } = navSlice.actions;
export default navSlice.reducer;
