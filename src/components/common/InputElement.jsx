import Label from "./Label";
import Input from "./Input";
import PropTypes from "prop-types";

const InputElement = ({ label, type = "text", name, value, onChange }) => (
  <>
    <Label htmlFor={name}>{label}</Label>
    <Input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
    />
  </>
);

InputElement.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputElement;
