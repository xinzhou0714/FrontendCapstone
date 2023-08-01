import React from "react";
import SectionItem from "../../layouts/SectionItem";
import TitleBar from "./TitleBar";
import ContentBar from "./ContentBar";

function CustomerSay() {
  const cssOverrides = {
    backgroundColor: "var(--primary-color1)",
    paddingBottom: "5rem",
  };
  return (
    <SectionItem cssOverrides={cssOverrides}>
      <TitleBar />
      <ContentBar />
    </SectionItem>
  );
}

export default CustomerSay;
