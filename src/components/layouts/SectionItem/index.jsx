import React from "react";
import styles from "./index.module.css";

function SectionItem(props) {
  return <section className={styles.container}>{props.children}</section>;
}

export default SectionItem;
