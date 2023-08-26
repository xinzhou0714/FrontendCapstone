import React, { useState } from "react";
import SectionItem from "@/components/layouts/SectionItem";
import styles from "./index.module.css";

import { Box, Button, FormControl, FormLabel, VStack } from "@chakra-ui/react";
import { useBookingContext } from "@/context/bookingContext";
import DateInput from "@/components/pages/BookingPage/BookingForm/DateInput";
import TimeInput from "@/components/pages/BookingPage/BookingForm/TimeInput";
import GuestInput from "@/components/pages/BookingPage/BookingForm/GuestInput";
import OccasionInput from "@/components/pages/BookingPage/BookingForm/OccasionInput";

// options for time
const timeOptions = [
  {
    title: "17:00",
    value: "17",
  },
  {
    title: "18:00",
    value: "18",
  },
  {
    title: "19:00",
    value: "19",
  },
  {
    title: "20:00",
    value: "20",
  },
  {
    title: "21:00",
    value: "21",
  },
  {
    title: "22:00",
    value: "22",
  },
];

function BookingForm() {
  //states
  const [resDate, setResDate] = useState(
    new Date().toLocaleDateString("en-CA")
  );
  const [resTime, setResTime] = useState("");
  const [resGuest, setResGuest] = useState("");
  const [resOccasion, setResOccasion] = useState("Birthday");
  // context
  const { state, submitNewEntry } = useBookingContext();

  const doSubmit = (e) => {
    e.preventDefault();
    console.log("submit", {
      resDate: resDate,
      resTime: resTime,
      resGuest: resGuest,
      resOccasion: resOccasion,
    });
    submitNewEntry({ resDate, resTime, resGuest, resOccasion });
  };
  return (
    <SectionItem>
      <h3 className={"section-title"}>Reservation Details:</h3>
      <Box p={"1rem 0"}>
        <VStack spacing={4}>
          <FormControl>
            <FormLabel htmlFor={"resDate"} className={"inter-medium"}>
              Date
            </FormLabel>
            <DateInput />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor={"resTime"} className={"inter-medium"}>
              Time
            </FormLabel>
            <TimeInput
              onChange={(value) => {
                setResTime(value);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor={"resGuest"} className={"inter-medium"}>
              Number of guest
            </FormLabel>
            <GuestInput
              onChange={(value) => {
                setResGuest(value);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor={"resOccasion"} className={"inter-medium"}>
              Occasion
            </FormLabel>
            <OccasionInput />
          </FormControl>
          <Button
            onClick={doSubmit}
            className={["inter-medium", styles.button].join(" ")}
          >
            make your reservation
          </Button>
        </VStack>
      </Box>
    </SectionItem>
  );
}

export default BookingForm;
