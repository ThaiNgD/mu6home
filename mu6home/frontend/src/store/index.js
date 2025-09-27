// store.js
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

import authSlice from "./authSlice";
import messageSlice from "./messageSlice";
import roomSlice from "./roomSlice";

const rootReducer = combineReducers({
  // themeConfig: themeConfigSlice,
  auth: authSlice,
  room: roomSlice,
  message: messageSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// custom hooks without TypeScript types
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

export default store;
