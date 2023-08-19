import React from "react";
import SectionItem from "../../../layouts/SectionItem";
import TitleBar from "./TitleBar";
import ContentBar from "./ContentBar";

function Specials() {
  const cssOverrides = {
    marginBottom: "80px",
  };
  return (
    <SectionItem cssOverrides={cssOverrides}>
      <TitleBar />
      <ContentBar />
    </SectionItem>
  );
}

export default Specials;
