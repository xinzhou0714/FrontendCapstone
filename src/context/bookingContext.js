import React, { createContext, useContext, useReducer } from "react";

const BookingContext = createContext(null);
const bookedSlots = [
  {
    resDate: "2023-08-29",
    resTime: "17",
    resGuest: "5",
    resOccasion: "Birthday",
  },
  {
    resDate: "2020-09-05",
    resTime: "18",
    resGuest: "42",
    resOccasion: "Anniversary",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "booking": {
      const { resDate, resTime, resGuest, resOccasion } = action.payload;
      // if resDate is a new date , insert new entry directly
      // if date already exist, check if resTime is a new time
      // if both resDate and resTime exist, throw ERROR !
      const matched = state.filter(
        (slot) => slot.resDate === resDate && slot.resTime === resTime
      );
      if (matched.length > 0) {
        // return old state
        return [...state];
      } else {
        return [
          ...state,
          {
            resDate: resDate,
            resTime: resTime,
            resGuest: resGuest,
            resOccasion: resOccasion,
          },
        ];
      }
    }
  }

  throw Error("Unknown action:" + action.type);
}

export const BookingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, bookedSlots);
  // utils function
  const isAvailableTime = (dateStr, timeStr) => {
    return (
      state.filter(
        (slot) => slot.resDate === dateStr && slot.resTime === timeStr
      ).length === 0
    );
  };
  const isAvailableDate = (dateStr) => {
    return state.filter((slot) => slot.resDate === dateStr).length < 6;
  };
  return (
    <BookingContext.Provider
      value={{
        state: { ...state },
        submitNewEntry: ({ resDate, resTime, resGuest, resOccasion }) =>
          dispatch({
            type: "booking",
            payload: { resDate, resTime, resGuest, resOccasion },
          }),
        isAvailableDate: isAvailableDate,
        isAvailableTime: isAvailableTime,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBookingContext = () => useContext(BookingContext);
