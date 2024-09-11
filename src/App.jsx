import { useEffect, useState } from "react";
import { getHourMinutesSeconds } from "./utils/timeHelper";
// import TaskForm from "./components/TaskForm";
// import ClockForm from "./components/ClockForm";
import Text from "./components/common/Text";
import ClockList from "./components/ClockList";

const App = () => {
  /**
   * The state containing the base time for the system
   *
   * @type {[time: Date, React.Dispatch<React.SetStateAction<Date>>]} - An array with current time and function to update it
   */
  const [baseTime, setTime] = useState(new Date());

  /**
   * The state containing all created clocks
   *
   * @type {[clocks: Array, React.Dispatch<React.SetStateAction<Array>>]} - An array with all clocks in system and function to update it
   */
  const [clocks, setClocks] = useState([]);

  /**
   * The Base Clock Starter
   */
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1 * 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <Text $border="solid 1px" size="5rem" $padding="2rem">
          Your time is {getHourMinutesSeconds(baseTime)}
        </Text>
      </div>

      <ClockList clocks={clocks} setClocks={setClocks} baseTime={baseTime} />

      {/* <TaskForm
        cb={(t) => {
          console.log(t);
        }}
      />
      <ClockForm cb={(t) => console.log(t)} /> */}
    </div>
  );
};

export default App;
