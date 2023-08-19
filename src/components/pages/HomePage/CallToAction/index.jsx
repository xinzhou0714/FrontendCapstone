import React from "react";

import Description from "./Description";
import Picture from "./Picture";
import styles from "./index.module.css";
import SectionItem from "@/components/layouts/SectionItem";

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
