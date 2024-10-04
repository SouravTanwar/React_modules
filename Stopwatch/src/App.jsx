import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const formatTime = () => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = Math.floor(time / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);
    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <div className="stopwatch-container">
      <h1 className="title">Stopwatch</h1>
      <div className="time-display">
        {formatTime()}
      </div>
      <div className="button-container">
        <button
          className="control-button start-button"
          onClick={() => setIsRunning(true)}
        >
          Start
        </button>
        <button
          className="control-button stop-button"
          onClick={() => setIsRunning(false)}
        >
          Stop
        </button>
        <button
          className="control-button reset-button"
          onClick={() => {
            setIsRunning(false);
            setTime(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;

