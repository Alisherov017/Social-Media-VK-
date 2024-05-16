import React, { FC } from "react";
import styles from "./button.module.css";
interface IButton {
  children?: string;
  onClick?: () => void;
  bg?: string;
  color?: string;
}
const Button: FC<IButton> = ({ children, onClick, bg, color }) => {
  return (
    <button
      className={styles.btn}
      style={{ backgroundColor: bg, color: color }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
