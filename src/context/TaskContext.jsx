import React, { createContext, useContext, useState, useEffect } from "react"
import { toast } from "react-hot-toast"

const TaskContext = createContext()

const TaskProvider = ({ children }) => {
  const [taskText, setTaskText] = useState("")
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks")
    return savedTasks ? JSON.parse(savedTasks) : []
  })

  const [editId, setEditId] = useState(null)
  const [minutes, setMinutes] = useState(25)
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [mode, setMode] = useState("focus")

  const handleAdd = () => {

    if (editId !== null) {

      const updated = tasks.map((task) => {
        if (task.id === editId) {
          return { ...task, text: taskText }
        }
        return task
      })
      setTasks(updated)
      setTaskText("")
      setEditId(null)
      toast.success("Task updated!")

    } else {
      const newTask = {
        id: Date.now(),
        text: taskText,
        isDone: false,
        timer: 0,
        seconds: 0,
        isRunning: false,
      }
      setTasks([...tasks, newTask])
      setTaskText("")
      toast.success("Task updated!")

    }
  }

  const handleDel = (id) => {
    toast.error("Task deleted!")

    const deleted = tasks.filter((task) => task.id !== id)
    setTasks(deleted)
  }

  const handleEdit = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id)
    setEditId(id)
    setTaskText(taskToEdit.text)
  }

  const handleDone = (id) => {
    const updated = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isDone: !task.isDone }
      }
      return task
    })
    setTasks(updated)
  }

  const handleStartPause = () => {
    isRunning ? toast("Paused ⏸️") : toast("Focus time started ⏱")

    setIsRunning((prev) => !prev)
  }

  const handleReset = () => {
    setIsRunning(false)
    if (mode === "focus") {
      setMinutes(25)
    } else {
      setMinutes(5)
    }
    setSeconds(0)
  }

  const formatTime = (num) => (num < 10 ? `0${num}` : num)

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    let timer
    if (isRunning) {
      timer = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prev) => prev - 1)
        } else if (minutes > 0) {
          setMinutes((prev) => prev - 1)
          setSeconds(59)
        } else {
          if (mode === "focus") {
            setMode("break")
            setMinutes(5)
            setSeconds(0)
          } else {
            setMode("focus")
            setMinutes(25)
            setSeconds(0)
          }
        }
      }, 1000)
    }
    return () => clearInterval(timer)
  }, [isRunning, seconds, minutes, mode])

  return (
    <TaskContext.Provider
      value={{
        taskText,
        setTaskText,
        tasks,
        handleAdd,
        handleDel,
        handleEdit,
        editId,
        minutes,
        seconds,
        isRunning,
        mode,
        handleStartPause,
        handleReset,
        formatTime,
        handleDone,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}

const useTaskContext = () => {
  return useContext(TaskContext)
}

export { TaskProvider, useTaskContext }
