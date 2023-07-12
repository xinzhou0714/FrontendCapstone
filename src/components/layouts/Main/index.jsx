import React from "react";
import styles from "./index.module.css";

function Main(props) {
  return <main className={styles.outerContainer}>{props.children}</main>;
}

export default Main;
