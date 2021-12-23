import styles from "./Home.module.css";
import Playground from "../../componant/Playground/Playground";
import Sidebar from "../../componant/Sidebar/Sidebar";

import { useSelector } from "react-redux";
import { useScreenshot, createFileName } from "use-react-screenshot";
import { createRef, useState } from "react";
import { ShareSocial } from "react-share-social";
import {
  BsInstagram,
  BsTwitter,
  BsLinkedin,
  BsFillInfoCircleFill,
} from "react-icons/bs";
import { GoThreeBars } from "react-icons/go";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const [isShow, setIsShow] = useState(false);

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
  const isShowHandler = () => {
    setIsShow(!isShow);
  };
  return (
    <>
      <div className={styles.bigContainer}>
        <div className={styles.playgroundPlayers}>
          <div className={styles.playgroundContinerHome} ref={ref}>
            <div className={styles.matchTitle}>
              <h3> {matceName.name} </h3>
              <h6> 24 ديسمبر </h6>
            </div>

            <Playground />
            <div className={styles.socialInfoContiner}>
              <div className={styles.movingAlert}>
                <span>
                  {" "}
                  <BsFillInfoCircleFill /> قم بسحب وإسقاط اللاعبين لتغيير
                  مواقعهم{" "}
                </span>
              </div>
              <div dir="ltr" className={styles.ourSocial}>
                <div className={styles.divContiner}>
                  <BsInstagram className={styles.iconSochiel} />
                  <span className={styles.spanIconNamr}> /halfmillion_sa</span>
                </div>
                <div className={styles.divContiner}>
                  <BsTwitter className={styles.iconSochiel} />
                  <span className={styles.spanIconNamr}> /halfmillion_sa</span>
                </div>
                <div className={styles.divContiner}>
                  <BsLinkedin className={styles.iconSochiel} />
                  <span className={styles.spanIconNamr}> /halfmillion</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.buttonsContainer}>
            {isTabletOrMobile && (
              <button
                className={styles.buttonClassSmailSize}
                onClick={downloadScreenshot}
                size="lg"
              >
                تنزيل الصورة
              </button>
            )}
            {!isTabletOrMobile && (
              <button
                className={styles.buttonClass}
                onClick={downloadScreenshot}
                size="lg"
              >
                تنزيل الصورة
              </button>
            )}
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
            <GoThreeBars className={styles.toggleBtn} onClick={isShowHandler} />
            {isShow && (
              <div className={styles.hiddenSideBar}>
                {" "}
                <h1>
                  <Sidebar />
                </h1>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};
export default Home;
