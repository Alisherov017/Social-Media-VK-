import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InfoIcon from "@mui/icons-material/Info";
import CakeIcon from "@mui/icons-material/Cake";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState({
    name: "Acsdvdsvsdvdsv jnj",
    city: "Bishkek",
    country: "Страна",
    phone: "+339 654987",
    id: "4987",
    birthday: "25 августа 2005 г.",
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

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
        <div className={styles.two}>
          <p>
            <>
              <LocationOnIcon />
            </>
            <>{userData.city}</>
          </p>

          <span onClick={openModal}>
            <small>
              <InfoIcon />
            </small>
            <div className={styles.info}>Подробнее</div>
          </span>
        </div>

        <Link to="/edit-profile" className={styles.editProfileButton}>
          Редактировать профиль
        </Link>
      </div>
      {isModalOpen && (
        <>
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <div className={styles.header}>
                <h4>Подробная информация</h4>
              </div>
              <hr />
              <div className={styles.inf}>
                <div className={styles.id}>
                  <span>@</span>
                  <p> {userData.id}</p>
                </div>
                <hr />

                <div className={styles.person}>
                  <span>
                    <AccountCircleIcon />
                  </span>
                  <p>Имя: {userData.name}</p>
                </div>

                <div className={styles.birthday}>
                  <span>
                    <CakeIcon />
                  </span>
                  <p>День рождения: {userData.birthday}</p>
                </div>

                <div className={styles.city}>
                  <span>
                    <HomeIcon />
                  </span>
                  <p>Город: {userData.city}</p>
                </div>
                <hr />
              </div>
              <h4>Контактная информация</h4>
              <p>Моб. телефон: {userData.phone}</p>
            </div>
            <button className={styles.closeModalButton} onClick={closeModal}>
              X
            </button>
          </div>
          <div className={styles.owerflow} onClick={closeModal}></div>
        </>
      )}
    </div>
  );
};

export default HomePage;
