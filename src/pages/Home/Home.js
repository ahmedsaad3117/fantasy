import styles from "./Home.module.css";
import Playground from "../../componant/Playground/Playground";
import Sidebar from "../../componant/Sidebar/Sidebar";
import logo from "../../assets/images/amazon.png";

import { useSelector } from "react-redux";
import { useScreenshot, createFileName } from "use-react-screenshot";
import { createRef } from 'react'



const Home = () => {
  const ref = createRef(null);
  const [image, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0
  });

  const download = (image, { name = "img", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);



  const matceName = useSelector((state) => state.matcheName);
  return (
    <>
      <div className={styles.bigContainer}>
        <div className={styles.playgroundPlayers} >
          <div className={styles.mainBanner}> <img src={logo}/></div>
          <div className={styles.buttonsContainer}>
            <button  className={styles.buttonClass} onClick={downloadScreenshot} size="lg">
              Download Image
            </button>
            <button className={styles.buttonClass}  size="lg">
              Save & Share
            </button>
          </div>
          <div ref={ref} >
          <Playground />
          </div>
          <div className={styles.matchTitle} ><h3> {matceName.name} </h3></div>

        </div>
        <div  className={styles.sidebarStyle}>
          <Sidebar />
        </div>

      </div>
    </>
  );
};
export default Home;
