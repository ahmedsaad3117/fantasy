import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  selctedPlayer: [],
  matcheNameInfo: { name: "", date: "", time: "" },
};
const playerSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    fetchingData(state, action) {
      state.data = action.payload;
    },

    fetchingMatchName(state, action) {
      state.matcheNameInfo = action.payload;
    },

    addPlayerField(state, action) {
      const player = action.payload;
      state.selctedPlayer = [
        ...state.selctedPlayer,
        state.data.find((x) => x.number === player),
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

export const playerActions = playerSlice.actions;
export default playerSlice.reducer;
