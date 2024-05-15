import React from "react";
import NavbarLogin from "../../../widgets/navbar/NavbarLogin";
import styles from "./login.module.css";
import loginFoto from "./img/image.png";
import { Link } from "react-router-dom";
export const logo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/2048px-VK_Compact_Logo_%282021-present%29.svg.png";
const LoginPage = () => {
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
          <a href="https://apps.apple.com/ru/app/%D0%B2%D0%BA%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D0%B5-%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE%D1%87%D0%B0%D1%82/id564177498">
            <img src={loginFoto} />
          </a>
          <div className={styles.buttons}>
            <button className={styles.btn_login}>Google Play</button>
            <button className={styles.btn_login}>RuStore</button>
            <button className={styles.btn_login}>App Store</button>
          </div>
        </div>
        <div className={styles.login_right}>
          <form className={styles.form_login}>
            <img src={logo} />
            <h2>Вход ВКонтакте</h2>
            <input type="text" placeholder="Телефон или почта" />
            <button>Войти</button>
          </form>
          <div className={styles.login_links}>
            <Link to={"/registor"}>
              <button>Создать аккаунт</button>
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
