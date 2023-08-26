import React from "react";

import { faChevronDown, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";

const options = [
  {
    label: "17:00",
    time: "17",
  },
  {
    label: "18:00",
    time: "18",
  },
  {
    label: "19:00",
    time: "19",
  },
  {
    label: "20:00",
    time: "20",
  },
  {
    label: "21:00",
    time: "21",
  },
  {
    label: "22:00",
    time: "22",
  },
];

function TimeInput(props) {
  // props
  const { onChange } = props;

  // callback
  const handleChange = (value) => {
    onChange(value);
    console.log(`The Time got changed to ${value}!`);
  };

  // hook from UI Library
  const { getRadioProps, getRootProps } = useRadioGroup({
    name: "resTime",
    onChange: handleChange,
  });

  return (
    <Popover closeOnBlur={false} matchWidth={true}>
      <PopoverTrigger>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          bgColor="var(--secondary-color3)"
          borderRadius="1rem"
          p="1rem"
        >
          <FontAwesomeIcon
            icon={faClock}
            className={["inter-medium"].join(" ")}
          />
          <span className={"inter-medium"}>17:00</span>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={["inter-medium"].join(" ")}
          />
        </Box>
      </PopoverTrigger>
      <PopoverContent
        display="flex"
        justifyContent="space-between"
        flexDir="row"
        bgColor="var(--secondary-color3)"
        px="0.5rem"
        py="0.5rem"
        width="100%"
        {...getRootProps}
      >
        {options.map((item) => (
          <RadioBox key={item.label} {...getRadioProps({ value: item.time })}>
            {item.label}
          </RadioBox>
        ))}
      </PopoverContent>
    </Popover>
  );
}

export default TimeInput;

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
        borderWidth="2px"
        borderRadius="md"
        textAlign="center"
        bg="white"
        boxShadow="md"
        _checked={{
          bg: "var(--primary-color1)",
          color: "white",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        width="5rem"
        px="0.5rem"
        py="0.5rem"
      >
        <span className={"inter-medium"}>{props.children}</span>
      </Box>
    </Box>
  );
}
