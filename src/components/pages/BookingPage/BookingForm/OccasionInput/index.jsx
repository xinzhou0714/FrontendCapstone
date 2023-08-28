import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faTree } from "@fortawesome/free-solid-svg-icons";
import {
  Box,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";

function OccasionInput(props) {
  //props
  const { defaultOccasionStr, updateOccasionStr } = props;
  const options = ["Birthday", "Anniversary"];

  // callbacks
  const handleChange = (occasionStr) => {
    updateOccasionStr(occasionStr);
    console.log("updateOccasionStr:", occasionStr);
  };
  // hook from UI library
  const { getRadioProps, getRootProps } = useRadioGroup({
    name: "resOccasion",
    onChange: handleChange,
    defaultValue: defaultOccasionStr,
  });
  return (
    <Popover matchWidth={true}>
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
            icon={faTree}
            className={["inter-medium"].join(" ")}
          />
          <span className={"inter-medium"}>Birthday</span>
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
        {options.map((value) => (
          <RadioBox key={value} {...getRadioProps({ value: value })}>
            {value}
          </RadioBox>
        ))}
      </PopoverContent>
    </Popover>
  );
}

export default OccasionInput;

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
        width="10rem"
        px="0.5rem"
        py="0.5rem"
      >
        <span className={"inter-medium"}>{props.children}</span>
      </Box>
    </Box>
  );
}
