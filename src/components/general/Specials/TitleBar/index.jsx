import React from "react";
import styles from "./index.module.css";
import Button from "../../Button";

function TitelBar(props) {
  return (
    <div className={styles.flex}>
      <h3>Specials</h3>
      <Button caption={"online menu"} />
    </div>
  );
}

export default TitelBar;
