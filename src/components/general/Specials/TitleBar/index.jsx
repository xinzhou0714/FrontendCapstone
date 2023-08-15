import React from "react";
import styles from "./index.module.css";
import Button from "../../Button";

function TitleBar() {
  return (
    <div className={[styles.flex].join(" ")}>
      <h3 className={"section-categories"}>This Week's Specials</h3>
      <Button caption={"online menu"} />
    </div>
  );
}

export default TitleBar;
