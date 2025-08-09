import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() == "") return; 

    
      setTasks([...tasks, task]);
      setTask("");
    
  };
  
  const toggleTask = (indexToToggle) => {
    const newTasks = [...tasks];
    newTasks[1].completed = !newTasks[1].completed; // step 2: flip value
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };


  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>My To-Do App</h1>
      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
<ul>
        {tasks.map((t, index) => (
          <li
            key={index}
            style={{
              textDecoration: t.completed ? "line-through" : "none",
              cursor: "pointer"
            }}
            onClick={() => toggleTask(index)}
          >
            {t}
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteTask(index);
              }}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
