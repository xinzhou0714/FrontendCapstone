import React from "react";
import imageA from "./pics/Mario and Adrian A.jpg";
import imageB from "./pics/Mario and Adrian b.jpg";
import styles from "./index.module.css";

function Gallery() {
  return (
    <div className={styles.imageStack}>
      <img
        src={imageA}
        alt=""
        className={[styles.marioImage, styles.top].join(" ")}
      />
      <img
        src={imageB}
        alt=""
        className={[styles.marioImage, styles.bottom].join(" ")}
      />
    </div>
  );
}

export default Gallery;
