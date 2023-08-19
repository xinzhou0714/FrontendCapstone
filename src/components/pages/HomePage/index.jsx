import React from "react";

import CallToAction from "@/components/pages/HomePage/CallToAction";
import Specials from "@/components/pages/HomePage/Specials";
import Chicago from "@/components/pages/HomePage/Chicago";
import CustomerSay from "@/components/pages/HomePage/CustomerSay";

function HomePage() {
  return (
    <>
      <CallToAction />
      <Specials />
      <CustomerSay />
      <Chicago />
    </>
  );
}

export default HomePage;
