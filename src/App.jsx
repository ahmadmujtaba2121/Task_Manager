import React from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import PomodoroTimer from "./components/PomodoroTimer";

function App() {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center ">Task Manager ✅</h1>
      <PomodoroTimer />
      <AddTaskForm />
      <TaskList />
    </div>
  );
}

export default App;
