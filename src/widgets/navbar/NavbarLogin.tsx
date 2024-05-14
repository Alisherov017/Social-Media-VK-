import React from "react";
import styles from "./nav.module.css";
import { NavLink } from "react-router-dom";
const NavbarLogin = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_container}>
        <div className={styles.left}>
          <NavLink to={"/home"} className={styles.logo}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/VK_Full_Logo_%282021-present%29.svg/1280px-VK_Full_Logo_%282021-present%29.svg.png"
              alt=""
            />
          </NavLink>
          <div className={styles.group}></div>
        </div>
        <div className={styles.nav_r}></div>
      </div>
    </div>
  );
};

export default NavbarLogin;
