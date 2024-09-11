import { useState } from "react";

const useClockForm = ({ cb }) => {
  const [timezone, setTimezone] = useState("");
  const handleChange = (event) => {
    setTimezone(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (timezone !== "") {
      cb(timezone);
    }
  };

  return { timezone, handleChange, handleSubmit };
};

export default useClockForm;
