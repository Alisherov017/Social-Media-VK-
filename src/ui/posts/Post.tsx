import React from "react";
import styles from "./post.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import SendIcon from "@mui/icons-material/Send";

const Post = () => {
  return (
    <div className={styles.vkCard}>
      <div className={styles.vkHeader}>
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          className={styles.vkAvatar}
        />
        <div className={styles.vkUserDetails}>
          <h3 className={styles.vkUsername}>Имя пользователя</h3>
          <p className={styles.vkPostTime}>20 часов назад</p>
        </div>
      </div>
      <p className={styles.vkPostContent}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed nisi
        a dui dignissim ultrices at a ante. Maecenas fringilla nisi id lectus
        tempor, et tristique ligula aliquet.
      </p>
      <img
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        alt="Post Image"
        className={styles.vkPostImage}
      />
      <div className={styles.vkPostFooter}>
        <div className={styles.vkLikeButton}>
          <FavoriteBorderIcon />
        </div>
        <div className={styles.vkCommentButton}>
          <ChatBubbleOutlineIcon />
        </div>
        <div className={styles.vkShareButton}>
          <SendIcon />
        </div>
        {/* <div className={styles.vkPostStats}></div> */}
      </div>
    </div>
  );
};

export default Post;
