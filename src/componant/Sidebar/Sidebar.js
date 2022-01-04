import { useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { playerActions } from "../../store/slices/playerSlice";

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
      dispatch(playerActions.addPlayerField(playerNumber));
    }
    if (!isCheaked) {
      setNumberCheakedBox(--numberCheakedBox);

      dispatch(playerActions.removePlayerField(playerNumber));
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
                  <tr>
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
