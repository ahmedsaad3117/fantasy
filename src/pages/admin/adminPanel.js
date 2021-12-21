import { useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ADD_PLAYER_FIELD, REMOVE_PLAYER_FIELD } from "../../store/store";
import styles from './adminPanel.module.css'

const AdminPanel =()=>{

    const playersInfo = useSelector((state) => state.data);
     const dispatch =  useDispatch();
     
     const deletPlayerHandeler =()=>{
         dispatch({type:'removePlayer' , value: "1"})
     } 

    return(
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
                  <tr key={info.number}>
                    <td>{info.number}</td>
                    <td>{info.name}</td>
                    <td>{info.position}</td>
                    <td>
                      <input
                       
                        type="checkbox"
                      ></input>
                    </td>
                  </tr>    
                );
              })}
          </tbody>
        </Table>
        <button onClick={deletPlayerHandeler}> delete</button>
      </div>
    );

}

export default AdminPanel;