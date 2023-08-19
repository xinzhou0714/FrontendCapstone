import React from "react";
import SectionItem from "@/components/layouts/SectionItem";
import TitleSection from "@/components/general/TitelSection";

function AboutPage() {
  const cssOverrides = {
    backgroundColor: "var(--primary-color1)",
  };
  return (
    <SectionItem cssOverrides={cssOverrides}>
      <TitleSection title={"About Us"} />
    </SectionItem>
  );
}

export default AboutPage;
