import { createSlice } from "@reduxjs/toolkit";

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
    },
    logout: (state, action) => {
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const authenticate = autheniticateSlice.actions.authenticate;
export const logout = autheniticateSlice.actions.logout;
export default autheniticateSlice.reducer;
