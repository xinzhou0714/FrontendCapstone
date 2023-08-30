import React, { useState } from "react";
import SectionItem from "@/components/layouts/SectionItem";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useBookingContext } from "@/context/bookingContext";
import DateInput from "@/components/pages/BookingPage/BookingForm/DateInput";
import TimeInput from "@/components/pages/BookingPage/BookingForm/TimeInput";
import GuestInput from "@/components/pages/BookingPage/BookingForm/GuestInput";
import OccasionInput from "@/components/pages/BookingPage/BookingForm/OccasionInput";
import { useNavigate } from "react-router-dom";

// options for time
function BookingForm() {
  //states
  const [resDate, setResDate] = useState(
    new Date().toLocaleDateString("en-CA")
  );
  const [resTime, setResTime] = useState("17");
  const [resGuest, setResGuest] = useState("1");
  const [resOccasion, setResOccasion] = useState("Birthday");
  // context
  const { submitNewEntry, isAvailableTime } = useBookingContext();

  // hook for router
  // const navigate = useNavigate();
  // hook for message
  const toast = useToast();
  // utils function

  // callback
  const doSubmit = (e) => {
    e.preventDefault();
    console.log("submit", {
      resDate: resDate,
      resTime: resTime,
      resGuest: resGuest,
      resOccasion: resOccasion,
    });
    if (isAvailableTime(resDate, resTime)) {
      toast({
        title: "Reservation Submitted.",
        description: "We've received your reservation",
        status: "success",
        duration: 3000,
      });
      submitNewEntry({ resDate, resTime, resGuest, resOccasion });
      // This will make test fail , messages will be provided in toast instead
      // setTimeout(() => {
      //   navigate("/confirmed-booking");
      // }, 5000);
    } else {
      toast({
        title: "Not Available",
        description: "This time slot is not available.",
        status: "error",
        duration: 3000,
      });
    }
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
            <DateInput
              updateDateStr={(dateStr) => {
                setResDate(dateStr);
              }}
              defaultDateStr={resDate}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor={"resTime"} className={"inter-medium"}>
              Time
            </FormLabel>
            <TimeInput
              onChange={(value) => {
                setResTime(value);
              }}
              defaultTimeStr={resTime}
              resDate={resDate}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor={"resGuest"} className={"inter-medium"}>
              Number of guest
            </FormLabel>
            <GuestInput
              updateGuestStr={(guestStr) => {
                setResGuest(guestStr);
              }}
              defaultGuestStr={resGuest}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor={"resOccasion"} className={"inter-medium"}>
              Occasion
            </FormLabel>
            <OccasionInput
              defaultOccasionStr={resOccasion}
              updateOccasionStr={(occasionStr) => {
                setResOccasion(occasionStr);
              }}
            />
          </FormControl>
          <Button
            onClick={doSubmit}
            width={"100%"}
            height={"fit-content"}
            bgColor="var(--primary-color2)"
            color="var(--primary-color1)"
            px="1rem"
            border=" 3px solid var(--primary-color2)"
            borderRadius="1rem"
            _hover={{ bgColor: "var(--primary-color1)", color: "white" }}
            data-testid="submit-reservation"
          >
            <Box className="section-categories">make your reservation</Box>
          </Button>
        </VStack>
      </Box>
    </SectionItem>
  );
}

export default BookingForm;
