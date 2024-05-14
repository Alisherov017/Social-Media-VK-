import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../widgets/navbar/navbar";
import LeftBar from "../widgets/leftBar/Leftbar";
import { Home } from "@mui/icons-material";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <LeftBar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
