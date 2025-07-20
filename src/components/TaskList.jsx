// components/TaskList.jsx
import React from "react";
import { useTaskContext } from "../context/TaskContext.jsx";
import TaskCard from "./TaskCard";

function TaskList() {
  const { tasks } = useTaskContext();

  return (
    <div className="space-y-3 mt-4 ">
      {tasks.length === 0 ? (
        <p>No tasks yet. Add one above 👆</p>
      ) : (
        tasks.map((task) => <TaskCard key={task.id} task={task} />)
      )}
    </div>
  );
}

export default TaskList;
