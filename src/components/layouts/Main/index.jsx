import React from "react";
import { BookingProvider } from "@/context/bookingContext";

function Main(props) {
  return (
    <BookingProvider>
      <main>{props.children}</main>
    </BookingProvider>
  );
}

export default Main;
