// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

// no TypeScript interface, just a plain object
const initialState = {
  user: null,
  his: "",
  isUpdateStore: false,
  isLogged: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    readDataAuth: (state, action) => {
      state.user = action.payload.user;
      state.his = action.payload.his;
      state.isUpdateStore = false;
    },
    updateAuthStore: (state, action) => {
      state.isUpdateStore = action.payload;
    },
    setIsLogged: (state, action) => {
      state.isLogged = action.payload;
    },
  },
});

export const { readDataAuth, updateAuthStore, setIsLogged } = authSlice.actions;
export default authSlice.reducer;
