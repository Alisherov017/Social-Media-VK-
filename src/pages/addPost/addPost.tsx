import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "./addPost.module.css";
import Button from "../../ui/Button/Button";

interface FormData {
  name: string;
  title: string;
  mobilePhone: string;
  email: string;
  password: string;
  birthday: string;
  city: string;
}

const AddPost: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    title: "",
    mobilePhone: "",
    email: "",
    password: "",
    birthday: "",
    city: "",
  });

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
    // Logic to save the new user data
    console.log("New User Data:", formData);
  };

  return (
    <div className={styles.addProfilePage}>
      <h1>Добавить пост </h1>
      <form onSubmit={handleSubmit}>
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
          <div className={styles.cusBut}>
            <Button>ЗАГРУЗИТЬ ФОТО</Button>
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
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
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
        <div className={styles.cusBut}>
          <Button>Отменить</Button>
          <Button>Добавить</Button>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
