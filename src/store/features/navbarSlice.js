import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNavbarShown: false,
  isNavbarShrunken: false,
  menuIndex: 0,
  popMenuIndex: null,
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState: initialState,
  reducers: {
    toggleNavbar(state) {
      state.isNavbarShown = !state.isNavbarShown;
    },
    shrinkNavbar(state) {
      state.isNavbarShrunken = !state.isNavbarShrunken;
    },
    expandMenu(state, action) {
      state.menuIndex = action.payload;
    },
    popMenu(state, action) {
      state.popMenuIndex = action.payload;
    },
  },
});

export const { toggleNavbar, shrinkNavbar, expandMenu, popMenu } =
  navbarSlice.actions;

export default navbarSlice.reducer;
