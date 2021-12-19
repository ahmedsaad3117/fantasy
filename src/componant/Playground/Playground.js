import playground from "../../assets/images/Football.png";
import styles from "./Playground.module.css";
import CardPlayer from "../Cards/CardPlayer/CardPlayer";

import Draggable from "react-draggable"; // The default
import { useSelector } from "react-redux";

const Playground = () => {
  const playersInfo = useSelector((state) => state.selctedPlayer);

  return ( 
    <>
      <div>
        {playersInfo && playersInfo.slice(0,11).map((val, key) => {
          return (
            <Draggable key={key}>
              <div>
                <CardPlayer name={val.name} />
              </div>
            </Draggable>
          );
        })}

        <img className={styles.playground} alt="Player" src={playground} />
      </div>
    </>
  );
};

export default Playground;
