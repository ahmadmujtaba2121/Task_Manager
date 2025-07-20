// components/PomodoroTimer.jsx
import React from "react";
import { useTaskContext } from "../context/TaskContext.jsx";

function PomodoroTimer() {
  const {
    minutes,
    seconds,
    handleStartPause,
    handleReset,
    formatTime,
    isRunning,
    mode,
  } = useTaskContext();

  return (
    <div className="text-center my-6">
      <h2 className="text-xl font-bold">{mode === "focus" ? "Focus Time" : "Break Time"}</h2>
      <div className="text-4xl my-2">{formatTime(minutes)}:{formatTime(seconds)}</div>
      <div className="flex justify-center gap-4">
        <button onClick={handleStartPause} className="bg-green-500 hover:bg-green-600 transition-all duration-300 p-2 rounded-lg">
          {isRunning ? "Pause" : "Start"}
        </button>
        <button onClick={handleReset} className="transition-all duration-300 p-2 rounded-lg bg-red-500 hover:bg-red-700">Reset</button>
      </div>
    </div>
  );
}

export default PomodoroTimer;
