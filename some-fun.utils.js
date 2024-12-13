import moment from "moment";

const calculateDiffToSaturday = (date) => {
  if (typeof date !== "string")
    throw new Error('Date format must be "YYYY-MM-DD"');

  return (6 - moment(date).day() + 7) % 7 || 7;
};

const calculateDiffFromSunday = (date) => {
  if (typeof date !== "string")
    throw new Error('Date format must be "YYYY-MM-DD"');

  return (7 - moment(date).day() + 7) % 7 || 7;
};

const calculateDiffToFriday = (date) => {
  if (typeof date !== "string")
    throw new Error('Date format must be "YYYY-MM-DD"');

  return (5 - moment(date).day() + 7) % 7 || 7;
};

export {
  calculateDiffToSaturday,
  calculateDiffFromSunday,
  calculateDiffToFriday,
};
