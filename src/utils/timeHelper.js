import { addHours, getHours, getMinutes, getSeconds } from "date-fns";

/**
 * Function for parsing date object to Hour - Minute - Second formatted time
 * @param {Date} date - The date object to format
 * @returns {string} A formatted Time String
 */
export const getHourMinutesSeconds = (time) => {
  const hour = getHours(time);
  const minute = getMinutes(time);
  const second = getSeconds(time);
  return `${hour < 10 ? "0" + hour : hour}:${
    minute < 10 ? "0" + minute : minute
  }:${second < 10 ? "0" + second : second}`;
};

export const getTimezoneTime = (timezone, baseTime) => {
  if (timezone === "UTC" || timezone === "GMT") {
    return getHourMinutesSeconds(addHours(baseTime, 8));
  } else if (timezone === "PST") {
    return getHourMinutesSeconds(baseTime);
  }
  if (timezone === "EST") {
    return getHourMinutesSeconds(addHours(baseTime, 3));
  }
};
