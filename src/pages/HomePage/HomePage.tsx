import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profilePage}>
        <div className={styles.profileHeader}>
          <div className={styles.profileImageContainer}>
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              alt="User Profile"
              className={styles.profileImage}
            />
          </div>
          <h1>Имя Пользователя</h1>
          <p>Город, Страна</p>
          <Link to="/edit-profile" className={styles.editProfileButton}>
            Редактировать профиль
          </Link>
        </div>
        {/* <div className={styles.profileInfo}>
          <h2>Информация о профиле</h2>
          <p>Дата рождения: ДД.ММ.ГГГГ</p>
          <p>Email: user@example.com</p>
          <p>Телефон: +7 123 456 7890</p>
          <p>О себе: Краткое описание пользователя.</p>
        </div> */}
      </div>
    </div>
  );
};

export default HomePage;
