import { createStore } from "redux";


export const ADD_PLAYER_FIELD = "getAllSelctedPlayer";
export const REMOVE_PLAYER_FIELD = "removePlayerField";

const intinalState = require("../assets/files/player-names.json");
const matchNameFile = require("../assets/files/matach-name.json");

const playerReducer = (
  state = { data: intinalState, selctedPlayer: [], matcheName: matchNameFile },
  action
) => {
  const player = action.value;
  if (action.type === ADD_PLAYER_FIELD) {
    return {
      data: intinalState,
      matcheName: matchNameFile,
      selctedPlayer: [
        ...state.selctedPlayer,
        intinalState.find((x) => x.number === player),
      ],
    };
  }
  if (action.type === REMOVE_PLAYER_FIELD) {
    return {
      data: intinalState,
      matcheName: matchNameFile,
      selctedPlayer: [
        ...state.selctedPlayer.filter((x) => x.number !== player),
      ],
    };
  }
  if (action.type === "removePlayer") {
    // let deltedData = [...intinalState.filter(x=>x.number === player )]
    // delete intinalState[1];
    // console.log(intinalState[1])

    console.log("insde it")
     
    return {
      data: [...intinalState.filter((x) => x.number !== player)],
      matcheName: matchNameFile,
      selctedPlayer: [
        ...state.selctedPlayer.filter((x) => x.number !== player),
      ],
    };
  }
  return state;
};

const store = createStore(playerReducer);

export default store;
