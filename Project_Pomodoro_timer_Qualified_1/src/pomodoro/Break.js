import React from "react";
import { minutesToDuration } from "../utils/duration";

export default function Break({
  breakDuration,
  setBreakDuration,
  isTimerRunning,
}) {
  
  const increaseBreakTime = () => {
    setBreakDuration((value) => Math.min(15, value + 1));
  };

  const decreaseBreakTime = () => {
    setBreakDuration((value) => Math.max(1, value - 1));
  };
  
  return (
    <div className="input-group input-group-lg mb-2">
      <span className="input-group-text" data-testid="duration-break">
        {/* TODO: Update this text to display the current break session duration */}
        Break Duration: {minutesToDuration("0" + breakDuration)}
      </span>
      <div className="input-group-append">
        {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="decrease-break"
          onClick={decreaseBreakTime}
          disabled={isTimerRunning}
        >
          <span className="oi oi-minus" />
        </button>
        {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="increase-break"
          onClick={increaseBreakTime}
          disabled={isTimerRunning}
        >
          <span className="oi oi-plus" />
        </button>
      </div>
    </div>
  );
}
