import { createSlice, configureStore } from "@reduxjs/toolkit";


export const ADD_PLAYER_FIELD = "getAllSelctedPlayer";
export const REMOVE_PLAYER_FIELD = "removePlayerField";

const intinalState = require("../assets/files/playernames.json");
const matchNameFile = require("../assets/files/matachname.json");

const initialState = {
  data: intinalState.data,
  selctedPlayer: [],
  matcheName: matchNameFile,
};
const playerSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    addPlayerField(state, action) {
      const player = action.payload;
      state.selctedPlayer = [
        ...state.selctedPlayer,
        intinalState.data.find((x) => x.number === player),
      ];
    },
    removePlayerField(state, action) {
      const player = action.payload;
      state.selctedPlayer = [
        ...state.selctedPlayer.filter((x) => x.number !== player),
      ];
    },

  },
});

const store = configureStore({
  reducer: playerSlice.reducer,
});

export const playerActions = playerSlice.actions;
export default store;
