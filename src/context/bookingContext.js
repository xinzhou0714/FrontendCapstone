import React, { createContext, useContext, useReducer } from "react";

const BookingContext = createContext(null);
const bookedSlots = [
  {
    resDate: "2020-07-07",
    resTime: "17",
    resGuest: 5,
    resOccasion: "Birthday",
  },
  {
    resDate: "2020-07-08",
    resTime: "18",
    resGuest: 4,
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
  return (
    <BookingContext.Provider
      value={{
        state: { ...state },
        submitNewEntry: ({ resDate, resTime, resGuest, resOccasion }) =>
          dispatch({
            type: "booking",
            payload: { resDate, resTime, resGuest, resOccasion },
          }),
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBookingContext = () => useContext(BookingContext);
