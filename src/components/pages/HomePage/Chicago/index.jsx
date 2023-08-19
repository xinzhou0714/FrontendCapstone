import React from "react";
import styles from "./index.module.css";
import SectionItem from "@/components/layouts/SectionItem";
import Profile from "@/components/pages/HomePage/Chicago/Profile";
import Gallery from "@/components/pages/HomePage/Chicago/Gallery";

function Chicago() {
  return (
    <SectionItem classOverrides={styles.gridBox}>
      <Profile />
      <Gallery />
    </SectionItem>
  );
}

export default Chicago;
