import React from "react";
import "./TaskList.css"
function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <ul>
      {tasks.map((t, index) => (
        <li
          key={index}
          style={{
            textDecoration: t.completed ? "line-through" : "none",
            cursor: "pointer",
          }}
          onClick={() => toggleTask(index)}
        >
          {t.text}
          <button
            onClick={(e) => {
              e.stopPropagation();
              deleteTask(index);
            }}
            style={{ marginLeft: "15px" }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;