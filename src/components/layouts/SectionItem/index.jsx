import React from "react";
import styles from "./index.module.css";

function SectionItem(props) {
  const { cssOverrides } = props;
  return (
    <section className={styles.outerContainer} style={{ ...cssOverrides }}>
      <div className={styles.innerContainer}>{props.children}</div>
    </section>
  );
}

export default SectionItem;
