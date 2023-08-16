import { configureStore } from "@reduxjs/toolkit";
import authenticateReducer from "./authenticate";

export const store = configureStore({
  reducer: {
    auth: authenticateReducer,
  },
});
