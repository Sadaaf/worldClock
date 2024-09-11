import InputElement from "./common/InputElement";
import Button from "./common/Button";
import useTaskForm from "../customHooks/useTaskForm";

const TaskForm = (cb) => {
  const { taskState, handleChange, handleSubmit } = useTaskForm(cb);

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <InputElement
        label="Please Enter Title"
        name="title"
        value={taskState.title.value}
        onChange={handleChange}
      />
      <InputElement
        label="Please Enter Description"
        name="description"
        value={taskState.description.value}
        onChange={handleChange}
      />
      <Button>Submit</Button>
    </form>
  );
};

export default TaskForm;
