import { useState } from "react";
import { deepCopyObject } from "../utils/objectHelper";

const initialTaskState = {
  title: {
    value: "",
    errorMessage: "",
    touched: "",
  },
  description: {
    value: "",
    errorMessage: "",
    touched: "",
  },
};

const useTaskForm = ({cb}) => {
  const [taskState, setTaskState] = useState(deepCopyObject(initialTaskState));
  const handleChange = (event) => {
    const { name: key, value } = event.target;
    const oldState = deepCopyObject(taskState);
    oldState[key].value = value;

    if (value.length === 0)
      oldState[key].errorMessage = "Field can not be blank";
    setTaskState(oldState);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      taskState.title.errorMessage === "" &&
      taskState.description.errorMessage === ""
    )
      cb(taskState);
  };

  return { taskState, handleChange, handleSubmit };
};

export default useTaskForm;
