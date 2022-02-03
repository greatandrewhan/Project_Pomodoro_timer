import React from "react";
import { minutesToDuration, secondsToDuration } from "../utils/duration";

export default function Session({
  session,
  focusDuration,
  breakDuration,
  isTimerRunning,
}) {
  if (session === null) {
    return null;
  }

  const currentTime =
    session.label === "Focusing" ? focusDuration : breakDuration;
  const ariaValue =
    ((currentTime * 60 - session.timeRemaining) / (currentTime * 60)) * 100;

  function nextSession() {
    if (session.label === "Focusing") {
      return `Focusing for ${minutesToDuration(focusDuration)} minutes`;
    } else {
      return `On Break for ${minutesToDuration(breakDuration)} minutes`;
    }
  }

  return (
    <div>
      {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
      <div className="row mb-2">
        <div className="col">
          {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
          <h2 data-testid="session-title">{nextSession()}</h2>
          {/* TODO: Update message below correctly format the time remaining in the current session */}
          <p className="lead" data-testid="session-sub-title">
            {secondsToDuration(session.timeRemaining)} remaining
          </p>
          {isTimerRunning ? "" : <h2>PAUSED</h2>}
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <div className="progress" style={{ height: "20px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={ariaValue} // TODO: Increase aria-valuenow as elapsed time increases
              style={{ width: `${ariaValue}%` }} // TODO: Increase width % as elapsed time increases
            />
          </div>
        </div>
      </div>
    </div>
  );
}
