import React from "react";
import styles from "./index.module.css";

function Button(props) {
  const { caption } = props;
  return (
    <button className={styles.primaryButton} type={"button"}>
      {caption}
    </button>
  );
}

export default Button;
