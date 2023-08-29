import { fireEvent, render, screen } from "@testing-library/react";
import { BookingProvider } from "@/context/bookingContext";
import BookingForm from "./index";

test("Renders the BookingForm heading", () => {
  render(
    <BookingProvider>
      <BookingForm />
    </BookingProvider>
  );

  // constant we need
  const dateStr = new Date().toLocaleDateString("en-CA");
  const timeStr = "18:00";
  // get elements
  const dateInput = screen.getByTestId(dateStr);
  const timeInput = screen.getByTestId(timeStr);
  const submitButton = screen.getByTestId("submit-reservation");
  // before submit , radio buttons should be clickable
  expect(timeInput).not.toBeDisabled();
  expect(dateInput).not.toBeDisabled();
  fireEvent.click(dateInput);
  fireEvent.click(timeInput);
  fireEvent.click(submitButton);
  // after sumbit time slot "18:00" should be disabled , date slot still clickable
  expect(dateInput).not.toBeDisabled();
  expect(timeInput).toBeDisabled();
});
