import { createStore } from "redux";


export const ADD_PLAYER_FIELD = "getAllSelctedPlayer";
export const REMOVE_PLAYER_FIELD = "removePlayerField";

const intinalState = require("../assets/files/playernames.json");
const matchNameFile = require("../assets/files/matachname.json");

const playerReducer = (
  state = { data: intinalState.data, selctedPlayer: [], matcheName: matchNameFile },
  action
) => {
  const player = action.value;
  if (action.type === ADD_PLAYER_FIELD) {
    return {
      data: intinalState.data,
      matcheName: matchNameFile,
      selctedPlayer: [
        ...state.selctedPlayer,
        intinalState.data.find((x) => x.number === player),
      ],
    };
  }
  if (action.type === REMOVE_PLAYER_FIELD) {
    return {
      data: intinalState.data,
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
      data: [...intinalState.data.filter((x) => x.number !== player)],
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
