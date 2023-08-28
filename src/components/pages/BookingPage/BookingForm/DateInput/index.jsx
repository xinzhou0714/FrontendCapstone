import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  Box,
  Grid,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";
import { useBookingContext } from "@/context/bookingContext";

// utils func

const getDayList = (dateStr) => {
  const date = new Date(dateStr);
  const dateFirst = new Date(date.getFullYear(), date.getMonth(), 1); // the first day of month
  const weekday = dateFirst.getDay(); // between 0 and 6 , Mon->1 Tues->2 Sun->0
  dateFirst.setDate(dateFirst.getDate() - (weekday === 0 ? 7 : weekday)); // first day in viewport
  return Array(42)
    .fill(0)
    .map(() => {
      dateFirst.setDate(dateFirst.getDate() + 1);
      return dateFirst.toLocaleDateString("en-CA");
    });
};

const getDaysInMonth = (dateStr) => {
  const date = new Date(dateStr);
  return 42 - new Date(date.getFullYear(), date.getMonth(), 42).getDate();
};

const isValidDay = (dateStr, valueStr) => {
  const date = new Date(dateStr);
  const date2 = new Date(valueStr);
  const today = new Date();
  const hardValid =
    date.toLocaleDateString("en-CA") >= today.toLocaleDateString("en-CA");
  const softValid =
    date.getFullYear() === date2.getFullYear() &&
    date.getMonth() === date2.getMonth();
  return hardValid && softValid;
};
function DateInput(props) {
  // constants
  const weekDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  //Props
  const { defaultDateStr, updateDateStr } = props;
  //states
  const todayStr = new Date().toLocaleDateString("en-CA"); // "2023-08-25"
  const [daysStr, setDaysStr] = useState(getDayList(todayStr)); // a array of date string
  // context
  const { isAvailableDate } = useBookingContext();

  // callbacks
  const goNextMonth = () => {
    const date = new Date(value);
    const [year, month, day] = [
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
    ];
    const dateStart = new Date(year, month + 1, 1); // the first date of next month
    const dayCountNext = getDaysInMonth(dateStart.toLocaleDateString("en-CA"));
    if (day > dayCountNext) {
      // set last day of next month as new checked value
      setValue(
        new Date(year, month + 1, dayCountNext).toLocaleDateString("en-CA")
      );
    } else {
      // set same date of next  month as new checked value
      setValue(new Date(year, month + 1, day).toLocaleDateString("en-CA"));
    }
  };
  const goPrevMonth = () => {
    const now = new Date();
    const date = new Date(value);
    const [year, month, day] = [
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
    ];
    const dateStart = new Date(year, month - 1, 1); // the first date of previous month
    const dayCountPrev = getDaysInMonth(dateStart.toLocaleDateString("en-CA"));
    const dateLast = new Date(year, month - 1, dayCountPrev); //last day of previous month
    const date2Check =
      day < dayCountPrev ? new Date(year, month - 1, day) : dateLast;
    const canGo = dateLast > now;

    if (canGo) {
      if (date2Check < now) {
        setValue(now.toLocaleDateString("en-CA"));
      } else {
        setValue(date2Check.toLocaleDateString("en-CA"));
      }
    }
  };

  const handleChange = (dateStr) => {
    updateDateStr(dateStr);
    console.log("updateDateStr", dateStr);
  };

  // hook from UI Library
  const { getRadioProps, getRootProps, setValue, value } = useRadioGroup({
    name: "resDate",
    onChange: handleChange,
    defaultValue: defaultDateStr, // important !!!
  });
  // effect hook
  useEffect(() => {
    updateDateStr(value);
    console.log("updateDateStr in effect hook", value);
    setDaysStr(getDayList(new Date(value).toLocaleDateString("en-CA")));
  }, [value]);
  return (
    <Popover matchWidth={true} closeOnBlur={false}>
      <PopoverTrigger>
        <Box
          cursor="pointer"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          bgColor="var(--secondary-color3)"
          borderRadius="1rem"
          p="1rem"
        >
          <FontAwesomeIcon
            icon={faCalendarDays}
            className={["inter-medium"].join(" ")}
          />
          <span className={"inter-medium"}>{value}</span>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={["inter-medium"].join(" ")}
          />
        </Box>
      </PopoverTrigger>
      <PopoverContent width="100%">
        <Box bgColor="var(--secondary-color3)">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p="1rem"
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
              className={["inter-medium"].join(" ")}
              cursor="pointer"
              onClick={goPrevMonth}
            />
            <span className={["inter-medium"].join(" ")}>
              {new Date(value).toLocaleDateString("en-CA", {
                year: "numeric",
                month: "long",
              })}
            </span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className={["inter-medium"].join(" ")}
              cursor="pointer"
              onClick={goNextMonth}
            />
          </Box>
          <Grid
            gridTemplateColumns="repeat(7,1fr)"
            gridTemplateRows="repeat(7,1fr)"
            justifyItems="center"
            gap={"8px 8px"}
            pb={5}
            {...getRootProps()}
          >
            {weekDays.map((day) => (
              <Box key={day} className={"inter-semi-bold"}>
                {day}
              </Box>
            ))}
            {daysStr.map((dateStr) => (
              <RadioBox
                key={dateStr}
                {...getRadioProps({ value: dateStr })}
                className={"inter-medium"}
                borderRadius={"1rem"}
                isDisabled={
                  !isValidDay(dateStr, value) || !isAvailableDate(dateStr)
                }
                py={2}
                px={3}
              >
                {dateStr.slice(-2)}
                {/*{dateStr}*/}
              </RadioBox>
            ))}
          </Grid>
        </Box>
      </PopoverContent>
    </Popover>
  );
}

export default DateInput;

function RadioBox(props) {
  const { getInputProps, getRadioProps } = useRadio(props);
  const inputProps = getInputProps();
  const radioProps = getRadioProps();
  return (
    <Box as="label">
      <input {...inputProps} hidden />
      <Box
        {...radioProps}
        cursor="pointer"
        bgColor="white"
        p={2}
        borderRadius={8}
        _checked={{
          bg: "var(--primary-color1)",
          color: "white",
          borderColor: "teal.600",
        }}
        _disabled={{
          cursor: "not-allowed",
          opacity: 0.2,
          bgColor: "transparent",
        }}
      >
        <Box as="span" className={"inter-medium"} lineHeight={0.8}>
          {props.children}
        </Box>
      </Box>
    </Box>
  );
}
