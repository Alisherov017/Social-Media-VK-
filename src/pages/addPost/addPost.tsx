import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "./addPost.module.css";
import Button from "../../ui/Button/Button";
// import { FormDatas } from "../../types";
import { useAppDispatch, useAppSelector } from "../helpers/hooks";
import { useNavigate } from "react-router-dom";
// import { addPost } from "../../store/actions/post.actions";
import { getCurrentUser } from "../../store/actions/user.actions";
// import moment from "moment-timezone";
import { CardData } from "../../types";
import { addPost } from "../../store/actions/post.actions";
import moment from "moment-timezone";

const AddPost: React.FC = () => {
  const [post, setPost] = useState<CardData>({
    description: "",
    image: "",
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { currentUser } = useAppSelector((state) => state.users);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    for (let key in post) {
      if (!post[key]) {
        alert("Some inputs are empty!");
        return;
      }
    }

    let newPost = {
      ...post,
      time: moment(moment().format("YYYY-MM-DD")).format("LL"),
    };

    dispatch(
      addPost({
        userId: currentUser?.id!,
        post: newPost,
      })
    );

    setPost({
      description: "",
      image: "",
    });
    navigate("/profile");
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  }

  return (
    <div className={styles.addProfilePage}>
      <h1>Добавить пост</h1>
      <form onSubmit={handleSubmit}>
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
            // value={product.description}
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
