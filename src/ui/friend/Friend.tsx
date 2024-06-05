import React, { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./freands.module.css";
import { ProfileType } from "../../types";
import Button from "../Button/Button";
// import { ProfileType, UserType } from "../../types/types";

const Friends: FC<{ user: ProfileType }> = ({ user }) => {
  return (
    <div className={styles.friend}>
      <div className={styles.friendIn}>
        <div className={styles.avatar}>
          <img
            src={
              user.avatar ||
              "https://sun1-93.userapi.com/impf/DW4IDqvukChyc-WPXmzIot46En40R00idiUAXw/l5w5aIHioYc.jpg?quality=96&as=50x50,100x100,200x200,400x400&sign=10ad7d7953daabb7b0e707fdfb7ebefd&u=sMxW2caWLp1QPhK-jWVUJhAecZdUlsd44UvrOlpCGvQ&cs=200x200"
            }
            className={styles.avatarImage}
          />
        </div>
        <div className={styles.info}>
          <div className={styles.name}>
            <p>{user.name}</p>
            <div className={styles.phone}>
              <p>{user.city}</p>
              <p>{user.phone}</p>
            </div>
          </div>
          <div className={styles.actions}>
            <Link to={`/${user.id}`}>
              <Button>Подробнее</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
