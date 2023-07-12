import React from "react";
import imagePath from "./RestaurantFood.jpg";
import styles from "./index.module.css";

function Picture() {
  return (
    <img src={imagePath} className={styles.cover} alt={"restaurant food"}></img>
  );
}

export default Picture;
