import { render, screen } from "@testing-library/react";
import BookingPage from "@/components/pages/BookingPage/index";
import { BookingProvider } from "@/context/bookingContext";

test("Renders the BookingForm heading", () => {
  render(
    <BookingProvider>
      <BookingPage />
    </BookingProvider>
  );
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});
