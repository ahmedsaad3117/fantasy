import { useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ADD_PLAYER_FIELD, REMOVE_PLAYER_FIELD } from "../../store/store";

import styles from "./Sidebar.module.css";

const Sidebar = () => {

  const dispatch = useDispatch();
  let [isComlateTeam, setIsComlateTeam] = useState(false);
  let [numberCheakedBox, setNumberCheakedBox] = useState(0);
  const playersInfo = useSelector((state) => state.data);
  const playersSelcted = useSelector((state) => state.selctedPlayer);


  const addPlayerToFieldHandeler = (e, playerNumber) => {
    const isCheaked = e.target.checked;
    if (isCheaked) {
      setNumberCheakedBox(++numberCheakedBox);
      dispatch({ type: ADD_PLAYER_FIELD, value: playerNumber });
    }
    if (!isCheaked) {
      setNumberCheakedBox(--numberCheakedBox);

      dispatch({ type: REMOVE_PLAYER_FIELD, value: playerNumber });
    }
    if (numberCheakedBox >= 11) {
      setIsComlateTeam(true);
    }
    if (numberCheakedBox < 11) {
      setIsComlateTeam(false);
    }
  };

  return (
    <>
      <div className={styles.tableWrapper}>
        <Table size="sm" responsive>
          <thead>
            <tr>
              <th>الرقم</th>
              <th>الاسم</th>
              <th>المركز</th> 
              <th>اساسي</th>
            </tr>
          </thead>
          <tbody className={styles.tableSidebar}>
            {playersInfo &&
              playersInfo.map((info, key) => {
                return (
                  <tr key={info.number}>
                    <td>{info.number}</td>
                    <td>{info.name}</td>
                    <td>{info.position}</td>
                    <td>
                      <input
                        onChange={(e) =>addPlayerToFieldHandeler(e, info.number)}
                        disabled={isComlateTeam && !playersSelcted.find(x=>x.number===info.number) }
                        type="checkbox"
                      ></input>
                    </td>
                  </tr>    
                );
              })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Sidebar;
