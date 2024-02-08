import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "videos",
  initialState: {
    videoList: null,
  },
  reducers: {
    addVideoList: (state, action) => {
      state.videoList = action.payload;
    },
  },
});
export const { addVideoList } = videoSlice.actions;
export default videoSlice.reducer;
