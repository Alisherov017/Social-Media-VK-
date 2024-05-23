import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import NavbarLogin from "../../../widgets/navbar/NavbarLogin";
import styles from "./login.module.css";
import loginFoto from "./img/image.png";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../ui/Button/Button";
import { LoginType, logo } from "../../../types";
import { useAppDispatch } from "../../../helpers/Hooks";
import { getCurrentUser, getUsers } from "../../../store/actions/user.actions";
import { useAppSelector } from "../../helpers/hooks";

const LoginPage = () => {
  const [user, setUser] = useState<LoginType>({
    email: "",
    password: "",
    name: "",
  });

  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.users);
  const navigate = useNavigate();
    const { currentUser } = useAppSelector((state) => state.users);


  useEffect(() => {
    dispatch(getUsers());
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // for (let key in user) {
    //   if (!user[key]) {
    //     alert("Some inputs are empty!");
    //     return;
    //   }
    // }

    const foundUser = users.find((item) => item.email === user.email);

    console.log(foundUser);
    if (!foundUser) {
      alert("No user!");
      return;
    }

    if (foundUser.password !== user.password) {
      alert("Wrong password!");
      return;
    }

    localStorage.setItem("currentUser", foundUser.id!.toString());
    dispatch(getCurrentUser(foundUser.id!.toString()));
    setUser({
      email: "",
      password: "",
    });

    if (currentUser?.name) {
      navigate("/editHome");
    } else {
      navigate("/");
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
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
