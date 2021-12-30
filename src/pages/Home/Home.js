import styles from "./Home.module.css";
import Playground from "../../componant/Playground/Playground";
import Sidebar from "../../componant/Sidebar/Sidebar";
import insticon from "../../assets/images/insticon.png";
import twticon from "../../assets/images/twticon.png";
import tikicon from "../../assets/images/tikicon.png";

import { useSelector } from "react-redux";
import { useScreenshot, createFileName } from "use-react-screenshot";
import { createRef, useState } from "react";
import { ShareSocial } from "react-share-social";
import {
  BsInstagram,
  BsTwitter,
  BsFillInfoCircleFill,
} from "react-icons/bs";

import { GoThreeBars } from "react-icons/go";
import { FaTiktok } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  const [isCopyed , setIsCopyed]  = useState(false)

  const copyText = document.getElementById("myInput");

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const [isShow, setIsShow] = useState(true);

  const ref = createRef(null);
  const [image, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0,
  });

  // const download = (image, { name = "img", extension = "jpg" } = {}) => {
  //   const a = document.createElement("a");
  //   a.href = image;
  //   a.download = createFileName(extension, name);
  //   a.click();
  // };

  //const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

  const matceName = useSelector((state) => state.matcheName);
  const isShowHandler = () => {
    setIsShow(!isShow);
  };


  const isCopyedHanderl = () =>{
    setIsCopyed(true);
    isCopyedHanderl2();
  }
  const isCopyedHanderl2 = () =>{
    navigator.clipboard.writeText("https://fantasysu.com") 
   }
  return (
    <>
      <div className={styles.bigContainer}>
        <div className={styles.playgroundPlayers}>
          <div className={styles.playgroundContinerHome} ref={ref}>
            <div className={styles.matchTitle}>
              <h3> {matceName.name} </h3>
              <h6>  1 يناير  </h6>
              <span>19:50</span>
            </div>

            <Playground />
            <div
              className={
                isTabletOrMobile
                  ? styles.socialInfoContinerMobile
                  : styles.socialInfoContiner
              }
            >
              <div className={styles.movingAlert}>
                <span>
                  {" "}
                  <BsFillInfoCircleFill /> قم باختيار اللاعبين ثم قم بتحريكهم
                </span>
              </div>
              <div dir="ltr" className={styles.ourSocial}>
                <div className={styles.divContiner}>
                  <a href="https://www.instagram.com/halfmillion_sa">
                    <img className={styles.sochialIcons} src={insticon} alt="fb Icon"/>

                  </a>
                </div>
                <div className={styles.divContiner}>
                  <a href="https://twitter.com/halfmillion_sa">
                  <img className={styles.sochialIcons} src={twticon} alt="twitter Icon"/> 

                  </a>
                </div>
                <div className={styles.divContiner}>
                  <a href="https://www.tiktok.com/@halfmillion_sa">
                  <img className={styles.sochialIcons} src={tikicon} alt="tiktok Icon"/>
                  </a>

                </div>
              </div>
            </div>
          </div>

          <div dir="ltr" className={styles.buttonsContainer}>
            <div className={styles.socialShare}>
              <div  className={styles.inputShareLinkDiv}>
                {/* <input className={styles.inputShareLink} id="myInput" type="text" value="https://fantasysu.com"/> 
                <button className={styles.inputShareBtn} onClick={isCopyedHanderl}>{isCopyed?"Copied":"Copy"}</button> */}
              </div>
           
            </div>
          </div>
        </div>
        
          <div hidden={isTabletOrMobile} className={styles.sidebarStyle}>
            <Sidebar />
          </div>
        
        
          <div hidden={!isTabletOrMobile} className={styles.sidebarStyleMin}>
            <div className={styles.toggleBtnDiv}>
              
            <GoThreeBars className={styles.toggleBtn}  onClick={isShowHandler} />
            <span> قائمة اللاعبين</span>
            </div>
            
              <div hidden={isShow} className={styles.hiddenSideBar}>
                <h1>
                  <Sidebar />
                </h1>
              </div>
            
          </div>
        
      </div>
    </>
  );
};
export default Home;
