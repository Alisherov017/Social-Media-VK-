import React, { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./freands.module.css";
import { ProfileType } from "../../types";
// import { ProfileType, UserType } from "../../types/types";

const Friends: FC<{ user: ProfileType }> = ({ user }) => {
  return (
    <div className={styles.card}>
      <Link to={"/"}>
        <img
          className={styles.usersAvatar}
          src={
            user.avatar ||
            "https://sun1-93.userapi.com/impf/DW4IDqvukChyc-WPXmzIot46En40R00idiUAXw/l5w5aIHioYc.jpg?quality=96&as=50x50,100x100,200x200,400x400&sign=10ad7d7953daabb7b0e707fdfb7ebefd&u=sMxW2caWLp1QPhK-jWVUJhAecZdUlsd44UvrOlpCGvQ&cs=200x200"
          }
          alt="Avatar"
        />
      </Link>

      <div className={styles.friendInfo}>
        <Link to={"/"}>
          <h5 className={styles.name}>{user.name}</h5>
        </Link>
      </div>

      <div className={styles.deleteFriend}>
        <Link to={`/${user.id}`}>
          <button className={styles.delete}>Подробнее</button>
        </Link>
      </div>
    </div>
  );
};

export default Friends;
