import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../widgets/navbar/navbar";
import LeftBar from "../widgets/leftBar/Leftbar";
import { Home } from "@mui/icons-material";
import NavbarLogin from "../widgets/navbar/NavbarLogin";
import LoginPage from "../pages/auth/login/LoginPage";
import RegisterPage from "../pages/auth/registor/RegisterPage";

const MainLayout = () => {
  const tokens = localStorage.getItem("tokens");
  const location = useLocation();

  return (
    <>
      {!tokens ? (
        <>
          {location.pathname === "/register" ? <RegisterPage /> : <LoginPage />}
        </>
      ) : (
        <div>
          <Navbar />
          <div className="container__block">
            <div className="sidebar__block">
              <LeftBar />
            </div>

            <div className="main__routes">
              <Outlet />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MainLayout;
