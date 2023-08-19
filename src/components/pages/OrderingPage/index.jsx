import React from "react";
import SectionItem from "@/components/layouts/SectionItem";
import TitelSection from "@/components/general/TitelSection";

function OrderingPage() {
  const cssOverrides = {
    backgroundColor: "var(--primary-color1)",
  };
  return (
    <SectionItem cssOverrides={cssOverrides}>
      <TitelSection title={"Ordering"} />
    </SectionItem>
  );
}

export default OrderingPage;
