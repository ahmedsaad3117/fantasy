import {
  Navbar,
  Nav,
  Container,
} from "react-bootstrap";
import styles from './Navbar.module.css'
import logoImg from '../../assets/images/HalfMillionLogo.png'

const NavbarComp = () => {
  return (
    <>
      <Navbar variant="light" className={styles.navbarClass}>
        <Container className={styles.navFonts}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Navbar.Brand href="https://halfm.sa/"> <img alt='logo' className={styles.logoImgStyling} src={logoImg}/> </Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComp;
