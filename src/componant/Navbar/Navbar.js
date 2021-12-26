import {
  Navbar,
  Nav,
  Container,
} from "react-bootstrap";
import styles from './Navbar.module.css'

const NavbarComp = () => {
  return (
    <>
      <Navbar variant="dark" className={styles.navbarClass}>
        <Container className={styles.navFonts}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="https://halfm.sa/">موقعنا الرئيسي </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComp;
