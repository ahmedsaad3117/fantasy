import styles from './Footer.module.css'
import logoImg from '../../assets/images/HalfMillionLogo.png'

const Footer = () => {
  return (
    <>
      <footer className={styles.footerComp}>
        <div className={styles.footerTxt}>© 2021<img alt='logo' className={styles.logoImgStyling} src={logoImg}/> </div>
      </footer>
    </>
  );
};

export default Footer;
