export const generateDay = () => {
  const allDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Werdnesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const newDate = new Date().getDay();
  return allDays[newDate];
};
