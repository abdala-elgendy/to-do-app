import React from "react";
import "./TaskList.css"
function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <ul>
      {tasks.map((t) => (
        <li
          key={t.id}
          style={{
            textDecoration: t.completed ? "line-through" : "none",
            cursor: "pointer",
          }}
          onClick={() => toggleTask(t.id)}
        >
          {t.description}
          <button
            onClick={(e) => {
              e.stopPropagation();
              deleteTask(t.id);
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