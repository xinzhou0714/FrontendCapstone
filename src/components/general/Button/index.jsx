import React from "react";
import styles from "./index.module.css";

function Button(props) {
  const { caption, doClick } = props;
  const warning = () => {
    console.log(" no event assigned to button");
  };
  return (
    <button
      className={[styles.primaryButton].join(" ")}
      type={"button"}
      onClick={doClick ?? warning}
    >
      <span className={"section-categories"}>{caption}</span>
    </button>
  );
}

export default Button;
