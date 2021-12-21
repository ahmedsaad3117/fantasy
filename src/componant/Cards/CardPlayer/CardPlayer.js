import styles from "./CardPlayer.module.css";
import player from '../../../assets/images/player.png'

const CardPlayer = (props) => {
  return (
    <>
      <div className={styles.playercard}>
        <img alt="Player" className={styles.player} src={player} />
        <div className={styles.spanContianer}><span>{props.name}</span></div>
      </div>
    </>
  );
};

export default CardPlayer;
