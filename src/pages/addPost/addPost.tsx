import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "./addPost.module.css";
import Button from "../../ui/Button/Button";
import { FormDatas } from "../../types";
import { useAppDispatch } from "../helpers/hooks";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../store/actions/post.actions";

const AddPost: React.FC = () => {
  const [product, setProduct] = useState<FormDatas>({
    description: "",
    title: "",
    image: null,
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { value, name, files } = e.target;
    if (name === "image" && files) {
      setProduct({ ...product, [name]: files[0] });
    } else {
      setProduct({ ...product, [name]: value });
    }
    console.log(product, "after1");
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(addProduct({ product, navigate }));
    console.log(product, "after2");
  }
  return (
    <div className={styles.addProfilePage}>
      <h1>Добавить пост</h1>
      <form onSubmit={handleSubmit}>
        {/* <div className={styles.photoSection}>
          <img
            src={
              photo
                ? photo.toString()
                : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            }
            className={styles.profilePhoto}
            alt="Profile"
          />
          <input
            type="file"
            accept="image/*"
            name="image"
            onChange={handleChange}
            className={styles.photoInput}
          />
          <div className={styles.cusBut}>
            <Button>ЗАГРУЗИТЬ ФОТО</Button>
          </div>
        </div> */}

        <div className={styles.formGroup}>
          <label htmlFor="description">фото: </label>
          <input
            accept="image/*"
            onChange={handleChange}
            name="image"
            type="file"
            placeholder="image"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="description">Описание: </label>
          <input
            type="text"
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            required
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
