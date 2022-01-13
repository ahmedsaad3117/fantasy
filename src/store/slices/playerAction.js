import { playerActions } from "./playerSlice";

export const playersFieldAction = () => {
  return async (dispatch) => {
    const resp = await fetch("http://localhost:3000/playernames");

    if (!resp.ok) {
      throw new Error("could not fetch data");
    }
    const data = await resp.json();
    dispatch(playerActions.fetchingData(data));
  };
};
export const matchNameFieldAction = () => {
  return async (dispatch) => {
    const resp = await fetch("http://localhost:3000/matachname");

    if (!resp.ok) {
      throw new Error("could not fetch data");
    }
    const data = await resp.json();
    dispatch(playerActions.fetchingMatchName(data));
  };
};
export const matchNameFieldEditAction = async (data) => {
  const resp = await fetch("http://localhost:3000/matachname", {
    method: "PUT",
    body: JSON.stringify({ name: data.name, date: data.date, time: data.time }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!resp.ok) {
    throw new Error("could not fetch data");
  }
  console.log(data, "Asdasd hsdfhsdfgadfghkls[jkp");
};
export const addNewPlayerAction = async (data) => {
  const resp = await fetch("http://localhost:3000/playernames", {
    method: "POST",
    body: JSON.stringify({ name: data.name, number: data.number, position: data.position }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!resp.ok) {
    throw new Error("could not fetch data");
  }
};
export const deletePlayerAction = async (data) => {
  const resp = await fetch(`http://localhost:3000/playernames/${data}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!resp.ok) {
    throw new Error("could not fetch data");
  }
};
