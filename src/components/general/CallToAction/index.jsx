import React from "react";
import SectionItem from "../../layouts/SectionItem";
import styles from "./index.module.css";
import Description from "./Description";
import Picture from "./Picture";

function CallToAction() {
  const cssOverrides = {
    backgroundColor: "var(--primary-color1)",
    marginBottom: "5rem",
  };
  return (
    <SectionItem cssOverrides={cssOverrides}>
      <div className={styles.innerContainer}>
        <Description />
        <Picture />
      </div>
    </SectionItem>
  );
}

export default CallToAction;
