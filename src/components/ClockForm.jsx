import Button from "./common/Button";
import useClockForm from "../customHooks/useClockForm";
import Select from "./common/Select";
import Text from "./common/Text";

const ClockForm = (cb) => {
  const { timezone, handleChange, handleSubmit } = useClockForm(cb);

  return (
    <form onSubmit={handleSubmit}>
      <Text>Please select time zone</Text>
      <Select value={timezone} onChange={handleChange}>
        <option value="">Select Time Zone</option>
        <option value="UTC">UTC</option>
        <option value="GMT">GMT</option>
        <option value="EST">EST</option>
        <option value="PST">PST</option>
      </Select>
      <Button>Submit</Button>
    </form>
  );
};

export default ClockForm;
