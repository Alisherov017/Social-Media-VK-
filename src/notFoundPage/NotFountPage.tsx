import React from "react";

import styles from "./notFoundPage.module.css";
import img from "./image.png";
import { Link } from "react-router-dom";
const NotFountPage = () => {
  return (
    <div className={styles.NotFountPage}>
      <Link to={"./"}>
        <img src={img} alt="NotFoundPage" />
      </Link>
    </div>
  );
};

export default NotFountPage;
