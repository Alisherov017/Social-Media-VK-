import React from "react";
import styles from "./photo.module.css";
import Post from "../../ui/posts/Post";

const Photo = () => {
  return (
    <div className={styles.photo}>
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Photo;
