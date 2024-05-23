import Button from "../../ui/Button/Button";
import styles from "./friend.module.css";

const Friend = () => {
  return (
    <div className={styles.friend}>
      <div className={styles.friendIn}>
        <div className={styles.avatar}>
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            className={styles.avatarImage}
          />
        </div>
        <div className={styles.info}>
          <div className={styles.name}>
            <p> Руслан Алишеров </p>
          </div>
          <div className={styles.actions}>
            <Button>Подробнее</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friend;
