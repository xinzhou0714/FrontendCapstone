import React from "react";
import SectionItem from "../../layouts/SectionItem";
import Description from "./Description";
import Picture from "./Picture";
import styles from "./index.module.css";

function CallToAction() {
  const cssOverrides = {
    backgroundColor: "var(--primary-color1)",
    marginBottom: "5rem",
  };
  return (
    <SectionItem cssOverrides={cssOverrides} classOverrides={styles.gridBox}>
      <Description />
      <Picture />
    </SectionItem>
  );
}

export default CallToAction;
