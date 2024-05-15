import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState({
    name: "Имя Пользователя",
    city: "Город",
    country: "Страна",
    // Другие данные пользователя
  });

  // Обработчик открытия модального окна
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Обработчик закрытия модального окна
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.profilePage}>
      <div className={styles.profileHeader}>
        <div className={styles.profileImageContainer}>
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt="User Profile"
            className={styles.profileImage}
          />
        </div>
        <h1>{userData.name}</h1>
        <p>
          Город <span onClick={openModal}>Подробнее</span>
        </p>

        <Link to="/edit-profile" className={styles.editProfileButton}>
          Редактировать профиль
        </Link>
      </div>
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Подробные данные пользователя</h2>
            <p>Имя: {userData.name}</p>
            <p>Город: {userData.city}</p>
            <p>Страна: {userData.country}</p>
            {/* Другие данные пользователя */}
            <button className={styles.closeModalButton} onClick={closeModal}>
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
