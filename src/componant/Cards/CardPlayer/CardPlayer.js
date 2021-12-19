import styles from "./CardPlayer.module.css";
import player from '../../../assets/images/player.png'

const CardPlayer = (props) => {
  return (
    <>
      <div className={styles.playercard}>
        <img alt="Player" className={styles.player} src={player} />
        <span>{props.name}</span>
      </div>
    </>
  );
};

export default CardPlayer;
