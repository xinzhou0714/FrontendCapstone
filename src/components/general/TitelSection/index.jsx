import React from "react";
import SectionItem from "@/components/layouts/SectionItem";
import styles from "./index.module.css";

function TitleSection(props) {
  const { title } = props;
  return (
    <SectionItem>
      <h1 className={["display-title", styles.title].join(" ")}>
        {title ?? "Title"}
      </h1>
    </SectionItem>
  );
}

export default TitleSection;
