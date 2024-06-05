// Photo.tsx
import React from "react";
import styles from "./photo.module.css";
import Post from "../../ui/posts/Post";
import { useAppSelector } from "../../helpers/Hooks";
import { log } from "console";

const Photo = () => {
  return (
    <div className={styles.photo}>
      {/* <Post /> */}
    </div>
  );
};

export default Photo;
