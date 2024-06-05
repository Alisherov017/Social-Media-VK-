import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import styles from "./editedHome.module.css";

import { useAppDispatch, useAppSelector } from "../../helpers/hooks";
import { changeProfile } from "../../../store/actions/user.actions";
import Button from "../../../ui/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { ProfileType } from "../../../types";

const EditedPage = () => {
  const [user, setUser] = useState<ProfileType>({
    name: "",
    email: "",
    password: "",
    phone: "",
    avatar: "",
    city: "",
    bd: "",
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { currentUser } = useAppSelector((state) => state.users);

  useEffect(() => {
    currentUser && setUser({ ...currentUser });
  }, [currentUser]);

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const id = localStorage.getItem("currentUser");
    id && dispatch(changeProfile({ id, user }));
    navigate("/");
  }

  return (
    <div className={styles.editProfilePage}>
      {user.phone ? <h1>Редактировать профиль</h1> : <h1>Дополните данные</h1>}
      <form onSubmit={handleSubmit}>
        <div className={styles.photoSection}>
          <img
            src={
              user.avatar ||
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            }
            alt="Profile"
            className={styles.profilePhoto}
          />
          <div className={styles.change}></div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="avatar">Аватар:</label>
          <input
            type="avatar"
            id="avatar"
            name="avatar"
            onChange={handleInputChange}
            value={user.avatar}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="name">Имя:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleInputChange}
            required
            value={user.name || ""}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="birthday">День рождения:</label>
          <input
            type="text"
            id="birthday"
            name="bd"
            onChange={handleInputChange}
            required
            value={user.bd || ""}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="city">Город:</label>
          <input
            type="text"
            id="city"
            name="city"
            onChange={handleInputChange}
            required
            value={user.city || ""}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="mobilePhone">Моб. телефон:</label>
          <input
            type="text"
            id="mobilePhone"
            name="phone"
            onChange={handleInputChange}
            required
            value={user.phone || ""}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleInputChange}
            value={user.email || ""}
          />
        </div>

        <div className={styles.buttons}>
          <Button>Сохранить</Button>

          {/* <div className={styles.} ></div> */}
        </div>
      </form>
      <Link to={"/"}>
        <Button>Отменить</Button>
      </Link>
    </div>
  );
};

export default EditedPage;
