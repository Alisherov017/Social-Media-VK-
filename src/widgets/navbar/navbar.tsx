import React, { useEffect, useState } from "react";
import styles from "./nav.module.css";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faQuestionCircle,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

import { logout } from "../../store/slices/user.slice";
import { useAppDispatch, useAppSelector } from "../../helpers/Hooks";
import { getCurrentUser } from "../../store/actions/user.actions";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.users);
  const tokens = localStorage.getItem("tokens");
  const [module, setModule] = useState(false);

  useEffect(() => {
    tokens && dispatch(getCurrentUser());
  }, [dispatch]);

  console.log(user);
  useEffect(() => {
    tokens && dispatch(getCurrentUser());
  }, [dispatch]);

  console.log(user);
  const openModule = () => {
    setModule(true);
  };
  function onClickExit() {
    window.location.reload();
    dispatch(logout());
  }

  const closeModule = () => {
    setModule(false);
    console.log("hello");
  };

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbar_container}>
          <div className={styles.left}>
            <NavLink to={"/"} className={styles.logo}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/VK_Full_Logo_%282021-present%29.svg/1280px-VK_Full_Logo_%282021-present%29.svg.png"
                alt=""
              />
            </NavLink>
            <div className={styles.group}>
              <svg
                className={styles.icon}
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
              </svg>
              <input
                placeholder="Search"
                type="search"
                className={styles.input}
              />
            </div>
          </div>
          <div className={styles.nav_r}>
            <button onClick={openModule}>
              <img
                className={styles.nav_profil_img}
                src="https://sun1-93.userapi.com/impf/DW4IDqvukChyc-WPXmzIot46En40R00idiUAXw/l5w5aIHioYc.jpg?quality=96&as=50x50,100x100,200x200,400x400&sign=10ad7d7953daabb7b0e707fdfb7ebefd&u=sMxW2caWLp1QPhK-jWVUJhAecZdUlsd44UvrOlpCGvQ&cs=200x200"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
      {module && (
        <>
          <div className={styles.modal}>
            <Link to={"./"}>
              <div className={styles.modal_top}>
                <div>
                  <img
                    src="https://sun1-93.userapi.com/impf/DW4IDqvukChyc-WPXmzIot46En40R00idiUAXw/l5w5aIHioYc.jpg?quality=96&as=50x50,100x100,200x200,400x400&sign=10ad7d7953daabb7b0e707fdfb7ebefd&u=sMxW2caWLp1QPhK-jWVUJhAecZdUlsd44UvrOlpCGvQ&cs=200x200"
                    alt=""
                  />
                </div>
                <div>
                  {user && <h1 className={styles.user_name}>{user.email}</h1>}
                  {user && <h1 className={styles.user_number}>+339 654987</h1>}
                </div>
              </div>
            </Link>
            <div className={styles.modal_bottom}>
              <Link to={"https://vk.com/settings"}>
                <div className={styles.modal_links}>
                  <FontAwesomeIcon icon={faCog} />
                  <span className={styles.modal_links_}> Настройки</span>
                </div>
              </Link>
              <Link to={"https://vk.com/support?act=home"}>
                <div className={styles.modal_links}>
                  <FontAwesomeIcon icon={faQuestionCircle} />
                  <span className={styles.modal_links_}> Помощь</span>
                </div>
              </Link>
              <button onClick={onClickExit} className={styles.btn_exit}>
                <div className={styles.modal_links}>
                  <FontAwesomeIcon icon={faSignOutAlt} />

                  <span className={styles.modal_links_}> Выйти</span>
                </div>
              </button>
            </div>
          </div>
          <div className={styles.overlow} onClick={closeModule}></div>
        </>
      )}
    </>
  );
};

export default Navbar;
