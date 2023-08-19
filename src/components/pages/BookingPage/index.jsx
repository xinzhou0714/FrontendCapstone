import React from "react";

import TitelSection from "@/components/general/TitelSection";
import SectionItem from "@/components/layouts/SectionItem";

function BookingPage() {
  const cssOverrides = {
    backgroundColor: "var(--primary-color1)",
  };
  return (
    <SectionItem cssOverrides={cssOverrides}>
      <TitelSection title={"Reservation"} />
    </SectionItem>
  );
}

export default BookingPage;
