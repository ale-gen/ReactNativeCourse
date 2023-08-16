import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const autheniticateSlice = createSlice({
  name: "authenticate",
  initialState: {
    token: null,
    isAuthenticated: false,
  },
  reducers: {
    authenticate: (state, action) => {
      const token = action.payload;
      state.token = token;
      state.isAuthenticated = !!token;
      AsyncStorage.setItem("token", token);
    },
    logout: (state, action) => {
      state.token = null;
      state.isAuthenticated = false;
      AsyncStorage.removeItem("token");
    },
  },
});

export const authenticate = autheniticateSlice.actions.authenticate;
export const logout = autheniticateSlice.actions.logout;
export default autheniticateSlice.reducer;
