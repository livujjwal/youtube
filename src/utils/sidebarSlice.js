import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    showSidebar: true,
  },
  reducers: {
    toggleSidebar: (state, action) => {
      state.showSidebar = !state.showSidebar;
    },
  },
});

export const { toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
