import { useEffect, useState } from "react";

export default function Progress({ TIMER, onTimeOut }) {
  const [remainingTime, setRemainingTime] = useState(TIMER);

  useEffect(() => {
    console.log("SET TIMEMOUT");
    const timer = setTimeout(() => onTimeOut(null), TIMER);

    return () => {
      console.log("CLEAN TIMEOUT");
      clearTimeout(timer);
    };
  }, [onTimeOut, TIMER]);

  useEffect(() => {
    console.log("SET INTERVAL");
    const timer = setInterval(() => setRemainingTime((prev) => prev - 10), 10);
    return () => {
      clearInterval(timer);
      console.log("CLEAN INTERVAL");
    };
  }, []);

  return (
    <>
      <progress max={TIMER} value={remainingTime} />;
    </>
  );
}
