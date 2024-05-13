import React from "react";
import styles from "./nav.module.css";
import { Link } from "react-router-dom";
import Input from "../../ui/input/Input";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <Link to={"/home"}> vk</Link>
        <Input />
      </div>
      <div className={styles.rigth}>
        <img
          src=" https://pp.userapi.com/60tZWMo4SmwcploUVl9XEt8ufnTTvDUmQ6Bj1g/mmv1pcj63C4.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
