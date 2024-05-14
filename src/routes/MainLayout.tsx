import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../widgets/navbar/navbar";
import LeftBar from "../widgets/leftBar/Leftbar";
import { Home } from "@mui/icons-material";
import NavbarLogin from "../widgets/navbar/NavbarLogin";

const MainLayout = () => {
  const tokens = localStorage.getItem("tokens");
  return (
    <>
      {tokens ? (
        <NavbarLogin />
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
