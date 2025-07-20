import React from "react"
import { useTaskContext } from "../context/TaskContext.jsx"

function TaskCard({task}) {
    const { handleDel, handleDone, handleEdit } = useTaskContext()

    return (
        <div className="border p-4 rounded flex justify-between items-center">
            <div className="flex gap-2 items-center">
                <input
                    type="checkbox"
                    checked={task.isDone}
                    onChange={() => handleDone(task.id)}
                />
                <span className={task.isDone ? "line-through" : ""}>
                    {task.text}
                </span>
            </div>
            <div className="flex gap-2">
                <button onClick={() => handleEdit(task.id)} className="bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 p-2 rounded-lg">Edit</button>
                <button onClick={() => handleDel(task.id)} className="transition-all duration-300 p-2 rounded-lg bg-red-500 hover:bg-red-700">Delete</button>
            </div>  
        </div>
    )
}

export default TaskCard