import React from "react";
import SectionItem from "../../layouts/SectionItem";
import Description from "./Description";
import Picture from "./Picture";

function CallToAction() {
  const cssOverrides = {
    backgroundColor: "var(--primary-color1)",
    marginBottom: "5rem",
  };
  return (
    <SectionItem cssOverrides={cssOverrides}>
      <Description />
      <Picture />
    </SectionItem>
  );
}

export default CallToAction;
