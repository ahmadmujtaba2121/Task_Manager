import React from "react";
import { useTaskContext } from "../context/TaskContext.jsx"

function AddTaskForm() {
    const { taskText, setTaskText, handleAdd, editId } =  useTaskContext()

    return (
        <div className="flex gap-4">
            <input
            value={taskText}
            onChange={(e) => {setTaskText(e.target.value)}}
            className="border p-2 rounded w-full"
            placeholder="Add Task"
            />
            <button onClick={handleAdd} className="bg-gray-200 p-2 hover:bg-gray-300 transition-all duration-300 rounded-lg ">{editId ? "Update Task" : "Add Task"}</button>
        </div>
    )
}


export default AddTaskForm