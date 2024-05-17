import React, { ChangeEvent, FormEvent, useState } from "react";
import NavbarLogin from "../../../widgets/navbar/NavbarLogin";
import styles from "./login.module.css";
import loginFoto from "./img/image.png";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../ui/Button/Button";
import { logo } from "../../../types";
import { useAppDispatch } from "../../../helpers/Hooks";
import { loginUser } from "../../../store/actions/user.actions";

const LoginPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
const dispatch =useAppDispatch()
const navigate=useNavigate()
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }
  console.log(user);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("okk");

    if (!user.email || !user.password) {
      alert("Заполните все поля");
      return;
    }
     dispatch(loginUser({ data: user, navigate }));
  }
  return (
    <>
      <NavbarLogin />
      <div className={styles.login_container}>
        <div className={styles.login_left}>
          <h1>ВКонтакте для мобильных устройств</h1>
          <span>
            Установите официальное мобильное приложение ВКонтакте и оставайтесь
            <br />в курсе новостей ваших друзей, где бы вы ни находились.
          </span>
          <a
            target="_blank"
            href="https://apps.apple.com/ru/app/%D0%B2%D0%BA%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D0%B5-%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE%D1%87%D0%B0%D1%82/id564177498"
          >
            <img src={loginFoto} />
          </a>
          <div className={styles.buttons}>
            <a href="https://play.google.com/store/apps/details?id=com.vkontakte.android">
              <button className={styles.btn_login}>Google Play</button>
            </a>
            <a
              target="_blank"
              href="https://www.rustore.ru/catalog/app/com.vkontakte.android"
            >
              <button className={styles.btn_login}>RuStore</button>
            </a>
            <a
              target="_blank"
              href="https://apps.apple.com/ru/app/%D0%B2%D0%BA%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D0%B5-%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE%D1%87%D0%B0%D1%82/id564177498"
            >
              <button className={styles.btn_login}>App Store</button>
            </a>
          </div>
        </div>
        <div className={styles.login_right}>
          <form className={styles.form_login} onSubmit={handleSubmit}>
            <img src={logo} />
            <h2>Вход ВКонтакте</h2>
            <input
              name="email"
              type="email"
              onChange={handleChange}
              placeholder="Email"
            />
            <input
              name="password"
              type="password"
              onChange={handleChange}
              placeholder="Пароль"
            />
            <Button bg="#0077ff" color="#fff">
              Войти
            </Button>
          </form>
          <div className={styles.login_links}>
            <Link to={"/register"}>
              <Button bg="rgb(100, 170, 86)" color="white">
                Создать аккаунт
              </Button>
            </Link>
            <p>
              После регистрации вы получите доступ ко всем возможностям VK ID
            </p>
          </div>
          <a href="https://vk.com/legal/recommendations">
            Применяются рекомендательные технологии
          </a>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.yesrs}>ВКонтакте © 2006-2024</div>
        <div className={styles.footer_links}>
          <a href="https://vk.com/about">О ВКонтакте</a>
          <a href="https://vk.com/terms">Правила</a>
          <a href="https://ads.vk.com/business">Для бизнеса</a>
          <a href="https://dev.vk.com/ru">Разработчикам</a>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
