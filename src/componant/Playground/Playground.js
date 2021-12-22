import playground from "../../assets/images/Football.png";
import styles from "./Playground.module.css";
import CardPlayer from "../Cards/CardPlayer/CardPlayer";

import Draggable from "react-draggable"; // The default
import { useSelector } from "react-redux";
import { useState } from "react";

const Playground = () => {
  const playersInfo = useSelector((state) => state.selctedPlayer);

  return (
    <>
      <div className={styles.playgroundBigContiner}>
        <div className={styles.cardHolders}>
          {playersInfo &&
            playersInfo.slice(0, 11).map((val, key) => {
              return (
                <Draggable
                  bounds
                  key={key}
                  defaultPosition={{ x: -90, y: 50 }}
                >
                  <div className={styles.playerCardPlayGround}>
                    <CardPlayer name={val.name} />
                  </div>
                </Draggable>
              );
            })}
        </div>
        <div className={styles.playgroundContiner}>
          <img className={styles.playground} alt="Player" src={playground} />
        </div>
      </div>
    </>
  );
};

export default Playground;
