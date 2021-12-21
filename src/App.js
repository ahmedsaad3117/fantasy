import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./componant/Footer/Footer";
import MainRoutes from "./componant/MainRoutes";
import NavbarComp from "./componant/Navbar/Navbar";

function App() {
  return (
    <>
      <Router>
        <NavbarComp />
        <MainRoutes />
        <Footer />
      </Router>
    </>
  );
}

export default App;
