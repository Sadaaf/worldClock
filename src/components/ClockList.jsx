import PropTypes from "prop-types";
import Text from "./common/Text";
import Button from "./common/Button";
import { useState } from "react";
import Popup from "./common/Popup";
import ClockForm from "./ClockForm";
import { getTimezoneTime } from "../utils/timeHelper";

const ClockList = ({ clocks, setClocks, baseTime }) => {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopUp = () => {
    setShowPopup(!showPopup);
  };

  const handleCreateClock = (timezone) => {
    const updatedClocks = [
      {
        id: new Date().toString(),
        timezone: timezone,
        time: baseTime,
        taskListId: new Date().toString() + "1",
      },
      ...clocks,
    ];
    setClocks(updatedClocks);
    togglePopUp();
  };
  const handleEditClock = () => {};

  const handleDeleteClock = (id) => {
    setClocks(clocks.filter((clock) => clock.id !== id));
  };
  return (
    <>
      <Button onClick={togglePopUp}>Create new clock</Button>
      {showPopup && (
        <Popup
          popupContent={<ClockForm cb={handleCreateClock} />}
          togglePopup={togglePopUp}
        />
      )}
      <ul>
        {clocks.map((clock) => (
          <li key={clock.id}>
            <Text $border="solid 1px" size="5rem" $padding="2rem">
              {`Timezone: ${clock.timezone} \n`}
              {getTimezoneTime(clock.timezone, baseTime)}
            </Text>
            <Button onClick={handleEditClock}>Edit</Button>
            <Button onClick={() => handleDeleteClock(clock.id)}>Delete</Button>
          </li>
        ))}
      </ul>
    </>
  );
};

ClockList.propTypes = {
  clocks: PropTypes.arrayOf(PropTypes.object).isRequired,
  baseTime: PropTypes.object.isRequired,
  setClocks: PropTypes.func.isRequired,
};

export default ClockList;
