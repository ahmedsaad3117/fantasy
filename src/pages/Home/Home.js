import styles from "./Home.module.css";
import Playground from "../../componant/Playground/Playground";
import Sidebar from "../../componant/Sidebar/Sidebar";


const Home = () => {


  return (
    <>
    <div className={styles.bigContainer}>
      <div className={styles.playgroundPlayers}>
        <Playground />
      </div>
      <div className={styles.sidebarStyle}>
      <Sidebar/>
      </div>
      </div>
    </>
  );
};
export default Home;
