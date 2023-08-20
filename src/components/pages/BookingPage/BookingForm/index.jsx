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
  const [resDate, setResDate] = useState(
    new Date().toLocaleDateString("en-CA")
  );
  const [resTime, setResTime] = useState("17");
  const [resGuest, setResGuest] = useState(0);
  const [resOccasion, setResOccasion] = useState("Birthday");
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
  const doSubmit = (e) => {
    e.preventDefault();
    console.log("submit", {
      resDate: resDate,
      resTime: resTime,
      resGuest: resGuest,
      resOccasion: resOccasion,
    });
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
                onChange={(event) => {
                  console.log("date->", event.target.value);
                  setResDate(event.target.value);
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
                onChange={(event) => {
                  console.log("time->", event.target.value);
                  setResTime(event.target.value);
                }}
                className={"inter-medium"}
              >
                {timeOptions.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.title}
                  </option>
                ))}
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
                onChange={(event) => {
                  console.log("guest->", event.target.value);
                  setResGuest(event.target.value);
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
                onChange={(event) => {
                  console.log("occasion->", event.target.value);
                  setResOccasion(event.target.value);
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
