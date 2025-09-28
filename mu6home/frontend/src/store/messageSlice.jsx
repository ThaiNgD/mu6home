// messageSlice.js
import { createSlice } from "@reduxjs/toolkit";

// no TypeScript interface, just a plain object
const initialState = {
  message: "",
  isShow: false,
  type: "info", // 'error', 'warning', 'info', 'success'
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    showMessage: (state, action) => {
      console.log(state);
      state.message = action.payload.message;
      state.type = action.payload.type;
      state.isShow = true;
    },
    closeMessage: (state) => {
      state.isShow = false;
    },
  },
});

export const { showMessage, closeMessage } = messageSlice.actions;
export default messageSlice.reducer;
