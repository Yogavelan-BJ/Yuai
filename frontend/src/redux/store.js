import { configureStore } from "@reduxjs/toolkit";
import selectBotReducer from "./features/selectBotSlice";

export const store = configureStore({
  reducer: {
    selectBot: selectBotReducer,
  },
});
