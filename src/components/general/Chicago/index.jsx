import React from "react";
import styles from "./index.module.css";
import SectionItem from "@/components/layouts/SectionItem";
import Profile from "@/components/general/Chicago/Profile";
import Gallery from "@/components/general/Chicago/Gallery";

function Chicago() {
  return (
    <SectionItem classOverrides={styles.gridBox}>
      <Profile />
      <Gallery />
    </SectionItem>
  );
}

export default Chicago;
