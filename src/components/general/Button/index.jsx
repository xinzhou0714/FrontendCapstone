import React from "react";
import styles from "./index.module.css";

function Button(props) {
  const { caption } = props;
  return (
    <button className={[styles.primaryButton].join(" ")} type={"button"}>
      <span className={"section-categories"}>{caption}</span>
    </button>
  );
}

export default Button;
