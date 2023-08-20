import React from "react";

import TitelSection from "@/components/general/TitelSection";
import BookingForm from "@/components/pages/BookingPage/BookingForm";

function BookingPage() {
  return (
    <>
      <TitelSection title={"Book Now"} />
      <BookingForm />
    </>
  );
}

export default BookingPage;
