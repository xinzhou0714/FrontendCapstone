import React from "react";
import styles from "./index.module.css";

function Button(props) {
  const { caption } = props;
  return (
    <button className={styles.primaryButton} type={"button"}>
      <span className={"section-text"}>{caption}</span>
    </button>
  );
}

export default Button;
