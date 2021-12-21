import { Route, Routes } from "react-router-dom";
import AdminPanel from "../pages/admin/adminPanel";
import Home from "../pages/Home/Home";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/admin" element={<AdminPanel />} />
      </Routes>
    </>
  );
};
export default MainRoutes;
