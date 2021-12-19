import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ADD_PLAYER_FIELD ,REMOVE_PLAYER_FIELD} from "../../store/store";

import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const dispatch =  useDispatch()

  const playersInfo = useSelector((state) => state.data);
    const addPlayerToFieldHandeler = (e,playerNumber) =>{
      const isCheaked = e.target.checked
      if(isCheaked){
        dispatch({type : ADD_PLAYER_FIELD , value : playerNumber  })
      }
      if(!isCheaked){
        dispatch({type : REMOVE_PLAYER_FIELD , value : playerNumber  })
      }
    }

  return (
    <>
      <div className={styles.tableWrapper}>
        <Table responsive>
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
                  <tr key={key}>
                    <td>{info.number}</td>
                    <td>{info.name}</td>
                    <td>{info.position}</td>
                    <td>
                      <input onChange={e => addPlayerToFieldHandeler(e,info.number)} type="checkbox"></input>
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
