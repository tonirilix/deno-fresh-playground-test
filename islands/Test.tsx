import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import Countdown from "./Countdown.tsx";

export default function Test() {
  const [countdownVisible, setCountdownVisible] = useState(false);

  const handleClick = () => {
    setCountdownVisible(true);
  };

  if (!countdownVisible) {
    return (
      <div>
        <Button onClick={handleClick}>-1</Button>
      </div>
    );
  }

  const date = new Date();
  date.setSeconds(date.getSeconds() + 10);
  return (
    <div>
      <Countdown target={date.toISOString()} />
    </div>
  );
}
