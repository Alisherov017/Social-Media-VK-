import React, { useState } from "react";
import styles from "./post.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendIcon from "@mui/icons-material/Send";
import PresentToAllIcon from "@mui/icons-material/PresentToAll";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useAppDispatch, useAppSelector } from "../../helpers/Hooks";
import { ProductType } from "../../types";

const Post: React.FC<{ post: ProductType }> = ({ post }) => {
  //
  const dispatch = useAppDispatch();

  const [isFunc, setIsFunc] = useState(false);
  const handleThree = () => {
    setIsFunc(true);
  };

  const closeModal = () => {
    setIsFunc(false);
  };

  const [isCommenting, setIsCommenting] = useState(false);
  const [comment, setComment] = useState("");

  const handleCommentButtonClick = () => {
    setIsCommenting(true);
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (comment.trim()) {
      console.log("Комментарий отправлен:", comment);
      // логику для отправки комментария на сервер
      setComment("");
    }
    // setIsCommenting(false);
  };

  return (
    <div className={styles.vkCard}>
      <div className={styles.vkHeader}>
        <div className={styles.beka}>
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            className={styles.vkAvatar}
          />
          <div className={styles.vkUserDetails}>
            <h3 className={styles.vkUsername}>Имя пользователя</h3>
            <p className={styles.vkPostTime}>20 часов назад</p>
          </div>
        </div>

        <div className={styles.three} onMouseEnter={handleThree}>
          <MoreVertIcon />
        </div>
      </div>
      {/*  */}
      <p className={styles.vkPostContent}>{post.description}</p>
      <img src={post.image} className={styles.vkPostImage} />
      <div className={styles.vkPostFooter}>
        <div className={styles.vkLikeButton}>
          <FavoriteBorderIcon className={styles.icons} />
        </div>
        <div
          className={styles.vkCommentButton}
          onClick={handleCommentButtonClick}
        >
          <ChatBubbleOutlineIcon className={styles.icons} />
        </div>
        <div className={styles.vkShareButton}>
          <SendIcon className={styles.icons} />
        </div>
      </div>

      {isCommenting && (
        <form className={styles.vkCommentForm} onSubmit={handleCommentSubmit}>
          <input
            type="text"
            placeholder="Напишите комментарий..."
            className={styles.vkCommentInput}
            value={comment}
            onChange={handleCommentChange}
          />
          <button type="submit" className={styles.vkSubmitButton}>
            <PresentToAllIcon />
          </button>
        </form>
      )}

      {isFunc && (
        <>
          <div className={styles.modalOverlay}>
            <div className={styles.modal}>
              <p onClick={() => console.log("Удалить")}>Удалить</p>
              <p onClick={() => console.log("Редактировать")}>Редактировать</p>
            </div>
          </div>
          <div className={styles.owerflow} onClick={closeModal}></div>
        </>
      )}
    </div>
  );
};

export default Post;
