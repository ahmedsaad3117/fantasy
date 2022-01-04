import {configureStore } from "@reduxjs/toolkit";
import playerReducer from './slices/playerSlice'



const store = configureStore({
  reducer: playerReducer,
});

export default store;
