import React from "react";
import styles from "./index.module.css";
import Card from "@/components/general/Card";

function ContentBar() {
  return (
    <div className={styles.gridBox}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default ContentBar;
