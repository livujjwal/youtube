import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";
import videoReducer from "./videoSlice";
const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    videos: videoReducer,
  },
});
export default store;
