import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; 
import { Toaster } from "react-hot-toast";

import { TaskProvider } from "./context/TaskContext"; // adjust path if needed

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskProvider>
      <App />
            <Toaster position="top-center" reverseOrder={false} />
    </TaskProvider>
  </React.StrictMode>
);
