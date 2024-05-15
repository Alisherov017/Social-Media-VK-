import React from "react";
import { Link } from "react-router-dom";
import styles from "./leftBar.module.css";
import PersonIcon from "@mui/icons-material/Person";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";
import GroupIcon from "@mui/icons-material/Group";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import StorefrontIcon from "@mui/icons-material/Storefront";
import WifiTetheringIcon from "@mui/icons-material/WifiTethering";
import ContactlessIcon from "@mui/icons-material/Contactless";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";

const LeftBar = () => {
  return (
    <div className={styles.LeftMenu}>
      <ul>
        <li className={styles.text}>
          <Link to="/">
            <PersonIcon />
            <>Моя страница</>
          </Link>
        </li>
        <li className={styles.text}>
          <Link to="/messenger">
            <MailOutlineIcon />
            <>Мессенджер</>
          </Link>
        </li>
        <li className={styles.text}>
          <Link to="/calls">
            <CallIcon />
            <>Звонки</>
          </Link>
        </li>
        <li className={styles.text}>
          <Link to="/friends">
            <GroupIcon />
            <>Друзья</>
          </Link>
        </li>
        <li className={styles.text}>
          <Link to="/photo">
            <InsertPhotoIcon />
            <>Фотографии</>
          </Link>
        </li>
        <li className={styles.text}>
          <Link to="/music">
            <MusicNoteIcon />
            <>Музыка</>
          </Link>
        </li>
        <li className={styles.text}>
          <Link to="/videos">
            <SlowMotionVideoIcon />
            <>Видео</>
          </Link>
        </li>
        <li className={styles.text}>
          <Link to="/clips">
            <VideoLibraryIcon />
            <>Клипы</>
          </Link>
        </li>
        <li>
          <SportsEsportsIcon />
          <>Игры</>
        </li>
        <hr />
        <li>
          <Link to="/market">
            <StorefrontIcon />
            <>Маркет</>
          </Link>
        </li>
        <li className={styles.text}>
          <Link to="/services">
            <WifiTetheringIcon />
            <>Сервисы</>
          </Link>
        </li>
        <hr />
        <li className={styles.text}>
          <Link to="/vkpay">
            <ContactlessIcon />
            <>VK Pay</>
          </Link>
        </li>
        <li className={styles.text}>
          <Link to="/ads">
            <LocalFloristIcon />
            <>Реклама</>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LeftBar;
