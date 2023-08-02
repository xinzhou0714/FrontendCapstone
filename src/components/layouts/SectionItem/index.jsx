import React from "react";
import styles from "./index.module.css";

function SectionItem(props) {
  const { cssOverrides, classOverrides } = props;
  return (
    <section className={styles.outerContainer} style={{ ...cssOverrides }}>
      <div className={[styles.innerContainer, classOverrides].join(" ")}>
        {props.children}
      </div>
    </section>
  );
}

export default SectionItem;
