import { useState } from "react";

function App() {
  const [task, setTask] = useState("");

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>My To-Do App</h1>
      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button>Add Task</button>
    </div>
  );
}

export default App;
