import playground from "../../assets/images/Football.png";
import styles from "./Playground.module.css";
import CardPlayer from "../Cards/CardPlayer/CardPlayer";

import Draggable from "react-draggable"; // The default
import { useSelector } from "react-redux";

const Playground = () => {
  const playersInfo = useSelector((state) => state.selctedPlayer);

  return (
    <>
      <div className={styles.playgroundBigContiner}>
        {playersInfo &&
          playersInfo.slice(0, 11).map((val, key) => {
            return (
              <Draggable key={key}>
                <div className={styles.playerCardPlayGround}>
                  <CardPlayer name={val.name} />
                </div>
              </Draggable>
            );
          })}

        <div className={styles.playgroundContiner}>
          <img className={styles.playground} alt="Player" src={playground} />
        </div>
      </div>
    </>
  );
};

export default Playground;
