import styles from "./Home.module.css";
import Playground from "../../componant/Playground/Playground";
import Sidebar from "../../componant/Sidebar/Sidebar";
import logo from "../../assets/images/HalfMillionLogo.png";

import { useSelector } from "react-redux";
import { useScreenshot, createFileName } from "use-react-screenshot";
import { createRef, useState } from "react";
import { ShareSocial } from "react-share-social";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { GoThreeBars } from "react-icons/go";
import { FaTiktok } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

   const [isShow , setIsShow] =useState(false)

  const ref = createRef(null);
  const [image, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0,
  });

  const download = (image, { name = "img", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

  const matceName = useSelector((state) => state.matcheName);
const isShowHandler=()=>{
  setIsShow(!isShow)
}
  return (
    <>
      <div className={styles.bigContainer}>
        <div className={styles.playgroundPlayers}>
          <div className={styles.mainBanner}>
            {" "}
            <img src={logo} />
          </div>

       

          <div className={styles.playgroundContinerHome} ref={ref}>
          <div className={styles.matchTitle}>
            <h3> {matceName.name} </h3>
          </div>
            <Playground />

            <div dir="ltr" className={styles.ourSocial}>
              <div>
                <BsFacebook className={styles.iconSochiel} />
                <span className={styles.spanIconNamr}> M1/2</span>
              </div>
              <div>
                <BsTwitter className={styles.iconSochiel} />
                <span className={styles.spanIconNamr}> M1/2</span>
              </div>
              <div>
                <FaTiktok className={styles.iconSochiel} />
                <span className={styles.spanIconNamr}> M1/2</span>
              </div>
            </div>
          </div>
          <div className={styles.buttonsContainer}>
            <button
              className={styles.buttonClass}
              onClick={downloadScreenshot}
              size="lg"
            >
              تنزيل الصورة
            </button>
          </div>
          <div dir="ltr" className={styles.buttonsContainer}>
            <div className={styles.socialShare}>
              <ShareSocial
                url="https://fantasysu.herokuapp.com"
                socialTypes={["facebook", "twitter", "reddit", "linkedin"]}
              />
            </div>
          </div>
        </div>
        {!isTabletOrMobile && (
          <div className={styles.sidebarStyle}>
            <Sidebar />
          </div>
        )}
        {isTabletOrMobile && (
          <div className={styles.sidebarStyleMin}>
              <GoThreeBars onClick={isShowHandler}/>
            { isShow && <div className={styles.hiddenSideBar}> <h1><Sidebar className={styles.toggleBtn}  /></h1></div>}
          </div>
        )}
      </div>
    </>
  );
};
export default Home;
