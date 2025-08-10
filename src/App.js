import { useState, useEffect } from "react";
import "./App.css";
import TaskList from "./component/TaskList/TaskList";
import TaskInput 
  from "./component/TaskInput/TaskInput";

import axios from "axios";
function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [task, setTask] = useState("");
  const API_URL = "http://localhost:8080/tasks";
  
  useEffect(() => {
    axios.get(`${API_URL}/alltasks`)
      .then(res => setTasks(res.data))
      .catch(err => console.error("Error fetching tasks:", err));
  }, []);

  const addTask = () => {
    if (task.trim() === "") return;

    axios.post(`${API_URL}/addTask`, task, {
      headers: { "Content-Type": "application/json" }
    })
    .then(res => {
      setTasks([...tasks, res.data]);
      setTask("");
    })
    .catch(err => console.error("Error adding task:", err));
  };

  const toggleTask = (id) => {
    axios.put(`${API_URL}/${id}/complete`)
      .then(res => {
        setTasks(tasks.map(t => t.id === id ? res.data : t));
      })
      .catch(err => console.error("Error toggling task:", err));
  };

const deleteTask = (id) => {
    axios.delete(`${API_URL}/${id}`)
      .then(() => {
        setTasks(tasks.filter(t => t.id !== id));
      })
      .catch(err => console.error("Error deleting task:", err));
  };

  return (
    <div className="app-container">
      <div className="todo-box">
        <h1>My To-Do App</h1>
        <TaskInput task={task} setTask={setTask} addTask={addTask} />
        <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
      </div>
    </div>
  );
}

export default App;