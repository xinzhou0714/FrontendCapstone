import React, { useState } from "react";
import SectionItem from "@/components/layouts/SectionItem";
import styles from "./index.module.css";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";

function BookingForm() {
  //states
  const [resDate, setResDate] = useState(new Date());
  const [resTime, setResTime] = useState("17");
  const [resGuest, setResGuest] = useState(null);
  const [resOccasion, setResOccasion] = useState("Birthday");
  const doSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <SectionItem>
      <h3 className={"inter-semi-bold"}>
        To book a reservation, please fill-out this form
      </h3>
      <Box p={"1rem 0"}>
        <form onSubmit={doSubmit}>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel htmlFor={"resDate"} className={"inter-medium"}>
                Date
              </FormLabel>
              <Input
                id={"resDate"}
                name={"resDate"}
                value={resDate}
                onChange={(date) => {
                  setResDate(date);
                }}
                type={"date"}
                className={"inter-medium"}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor={"resTime"} className={"inter-medium"}>
                Time
              </FormLabel>
              <Select
                id={"resTime"}
                name={"resTime"}
                value={resTime}
                onChange={(time) => {
                  setResTime(time);
                }}
                defaultValue={"17"}
                className={"inter-medium"}
              >
                <option value={"17"}>17:00</option>
                <option value={"18"}>18:00</option>
                <option value={"19"}>19:00</option>
                <option value={"20"}>20:00</option>
                <option value={"21"}>21:00</option>
                <option value={"22"}>22:00</option>
              </Select>
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor={"resGuest"} className={"inter-medium"}>
                Number of guest
              </FormLabel>
              <Input
                id={"resGuest"}
                name={"resGuest"}
                value={resGuest}
                onChange={(guest) => {
                  setResGuest(guest);
                }}
                type={"number"}
                className={"inter-medium"}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor={"resOccasion"} className={"inter-medium"}>
                Occasion
              </FormLabel>
              <Select
                id={"resOccasion"}
                name={"resOccasion"}
                value={resOccasion}
                onChange={(occasion) => {
                  setResOccasion(occasion);
                }}
                className={"inter-medium"}
              >
                <option value={"Birthday"}>Birthday</option>
                <option value={"Anniversary"}>Anniversary</option>
              </Select>
            </FormControl>
            <Button type={"submit"} className={styles.button}>
              make your reservation
            </Button>
          </VStack>
        </form>
      </Box>
    </SectionItem>
  );
}

export default BookingForm;
