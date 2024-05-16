import React, { FormEvent } from "react";
import styles from "./register.module.css";
import { logo } from "../login/LoginPage";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import NavbarLogin from "../../../widgets/navbar/NavbarLogin";
const RegisterPage = () => {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <>
      <NavbarLogin />

      <div className={styles.registor}>
        <form onSubmit={handleSubmit}>
          <div>
            <img src={logo} alt="logoVK" />
          </div>
          <h1>Введите номер</h1>
          <span>
            Ваш номер телефона будет использоваться для входа в аккаунт
          </span>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <button>Регистрация</button>
          <p>
            Нажимая «Продолжить», вы принимаете пользовательское соглашение и
            политику конфиденциальности
          </p>
        </form>
        <Link to={"/"} className={styles.button_back}>
          <ArrowBackIcon />
        </Link>
      </div>
    </>
  );
};

export default RegisterPage;
