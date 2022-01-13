import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ADD_PLAYER_FIELD, REMOVE_PLAYER_FIELD } from "../../store/store";
import styles from "./adminPanel.module.css";

import { useEffect, useState } from "react";
import {
  playersFieldAction,
  matchNameFieldAction,
  matchNameFieldEditAction,
  addNewPlayerAction,
  deletePlayerAction,
  
} from "../../store/slices/playerAction";

const AdminPanel = () => {
  const playersInfo = useSelector((state) => state.data);
  const matceName = useSelector((state) => state.matcheName);

  const [matchName , setMatchName] = useState('')
  const [matchDate , setmatchDate] = useState('')
  const [matchTime , setmatchTime] = useState('')

  const [playerId , setplayerId] = useState()
  const [playerName , setplayerName] = useState('')
  const [playerNumber , setplayerNumber] = useState('')
  const [playerPosition , setplayerPosition] = useState('حارس')

  console.log(playersInfo, "admon frpm here");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(playersFieldAction());
    dispatch(matchNameFieldAction());
  }, [dispatch]);



  const changeMatchNameHandler = () =>{
    matchNameFieldEditAction({ name: matchName, date: matchDate, time: matchTime })
  }
  
  const addNewPlayerHandler = () =>{
    addNewPlayerAction({ name: playerName, number: playerNumber, position: playerPosition })
  }
  function deletePlayerHandler  (data)  {
    deletePlayerAction(data)
  }


  return (
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
                <tr key={info.id}>
                  <td>{info.number}</td>
                  <td>{info.name}</td>
                  <td>{info.position}</td>
                  <td>
                  <button onClick={() => deletePlayerHandler(info.id)}>delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <div className={styles.changeDiv}>
        <span> تغير معلومات المبارة </span>
        <lable> عنوان المبارة </lable>

        <input placeholder="match name" type="text" onChange={e => setMatchName(e.target.value)} value={matchName} />
        <lable> تاريخ المبارة </lable>

        <input placeholder="match date" type="text" onChange={e => setmatchDate(e.target.value)} value={matchDate} />
        <lable> وقت المبارة </lable>

        <input placeholder="match time" type="text" onChange={e => setmatchTime(e.target.value)} value={matchTime} />
        <button onClick={changeMatchNameHandler}>تغير</button>
      </div>
      <div className={styles.changeDiv}>
        <span> اضافة لاعب</span>
        <lable> اسم اللاعب</lable>
        <input placeholder=" " type="text" onChange={e => setplayerName(e.target.value)} value={playerName} />
        <lable> رقم اللاعب</lable>

        <input placeholder=" " type="text" onChange={e => setplayerNumber(e.target.value)} value={playerNumber} />
        <select  onChange={e => setplayerPosition(e.target.value)} value={playerPosition}>
          <option selected value="حارس">حارس</option>
          <option value="مدافع">مدافع</option>
          <option value="وسط">وسط</option>
          <option value="مهاجم">مهاجم</option>
        </select>
        <button onClick={addNewPlayerHandler}>اضافة</button>
      </div>
    </div>
  );
};

export default AdminPanel;
