import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import styles from "./editedHome.module.css";

import { useAppDispatch, useAppSelector } from "../../helpers/hooks";
import {
  changeProfile,
  getCurrentUser,
} from "../../../store/actions/user.actions";
import Button from "../../../ui/Button/Button";
import { useNavigate } from "react-router-dom";
import { FormData } from "../../../types";

const EditedPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    title: "",
    mobilePhone: "",
    email: "",
    password: "",
    birthday: "",
    city: "",
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.users);
  const tokens = localStorage.getItem("tokens");

  useEffect(() => {
    user && setFormData({ ...user });
  }, [user]);
  useEffect(() => {
    tokens && dispatch(getCurrentUser());
  }, [dispatch]);

  console.log(user);
  const [photo, setPhoto] = useState<string | ArrayBuffer | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const storedTokens = localStorage.getItem("tokens");
    if (storedTokens) {
      const id = JSON.parse(storedTokens).id;
      dispatch(changeProfile({ id, formData }));
      navigate("/");
    } else {
      console.error("No tokens found in localStorage");
    }
  };

  return (
    <div className={styles.editProfilePage}>
      <h1>Редактировать профиль</h1>
      <form onSubmit={handleSubmit} >
        <div className={styles.photoSection}>
          <img
            src={
              photo
                ? photo.toString()
                : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            }
            alt="Profile"
            className={styles.profilePhoto}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className={styles.photoInput}
          />
          <div className={styles.change}>
            <Button>Изменить фото</Button>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="name">Имя:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="birthday">День рождения:</label>
          <input
            type="text"
            id="birthday"
            name="birthday"
            value={formData.birthday}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="city">Город:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="mobilePhone">Моб. телефон:</label>
          <input
            type="text"
            id="mobilePhone"
            name="mobilePhone"
            value={formData.mobilePhone}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className={styles.buttons}>
          <Button>Отменить</Button>
          <Button>Сохранить</Button>
          {/* <div className={styles.} ></div> */}
        </div>
      </form>
    </div>
  );
};

export default EditedPage;
