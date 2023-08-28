import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faPersonCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  Box,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";

// options
const options = [
  {
    label: "1",
    count: 1,
  },
  {
    label: "2",
    count: 2,
  },
  {
    label: "3",
    count: 3,
  },
  {
    label: "4",
    count: 4,
  },
  {
    label: "5",
    count: 5,
  },
  {
    label: "6",
    count: 6,
  },
];

function GuestInput(props) {
  // props
  const { defaultGuestStr, updateGuestStr } = props;
  // callback
  const handleChange = (guestStr) => {
    updateGuestStr(guestStr);
    console.log("updateGuestStr", guestStr);
  };

  // hook from UI Library
  const { getRadioProps, getRootProps, value } = useRadioGroup({
    name: "resGuest",
    onChange: handleChange,
    defaultValue: defaultGuestStr,
  });

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
            icon={faPersonCirclePlus}
            className={["inter-medium"].join(" ")}
          />
          <span className={"inter-medium"}>{value} guest(s)</span>
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
        {...getRootProps()}
      >
        {options.map((item) => (
          <RadioBox key={item.label} {...getRadioProps({ value: item.label })}>
            {item.label}
          </RadioBox>
        ))}
      </PopoverContent>
    </Popover>
  );
}

export default GuestInput;

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
