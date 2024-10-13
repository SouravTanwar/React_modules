import React, { useState, useEffect } from 'react';

function App() {
  // State for hours, minutes, seconds, and active timer status
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [totalSeconds, setTotalSeconds] = useState(0); // Total time in seconds

  // Update the total seconds when the timer is active
  useEffect(() => {
    let timerId;
    if (isActive && totalSeconds > 0) {
      timerId = setInterval(() => {
        setTotalSeconds(prevTime => prevTime - 1);
      }, 1000);
    }

    // Stop the timer when it hits 0
    if (totalSeconds === 0) {
      setIsActive(false);
    }

    return () => clearInterval(timerId); // Cleanup on component unmount or stop
  }, [isActive, totalSeconds]);

  // Function to convert hours, minutes, and seconds to total seconds
  const handleStart = () => {
    const total = Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds);
    setTotalSeconds(total); // Set total time in seconds
    setIsActive(true); // Start the timer
  };

  // Function to stop the timer
  const handleStop = () => {
    setIsActive(false);
  };

  // Function to reset the timer
  const handleReset = () => {
    setIsActive(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setTotalSeconds(0);
  };

  // Function to format time into hours, minutes, seconds
  const formatTime = (totalSeconds) => {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Set Timer</h1>
      <div>
        <label>
          Hours:
          <input
            type="number"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            min="0"
          />
        </label>
        <label>
          Minutes:
          <input
            type="number"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
            min="0"
            max="59"
          />
        </label>
        <label>
          Seconds:
          <input
            type="number"
            value={seconds}
            onChange={(e) => setSeconds(e.target.value)}
            min="0"
            max="59"
          />
        </label>
      </div>

      <div style={{ margin: '20px' }}>
        <button onClick={handleStart} disabled={isActive}>
          Start
        </button>
        <button onClick={handleStop} disabled={!isActive}>
          Stop
        </button>
        <button onClick={handleReset}>
          Reset
        </button>
      </div>

      {/* Display the countdown */}
      <h2>Time Remaining: {formatTime(totalSeconds)}</h2>
    </div>
  );
}

export default App;
