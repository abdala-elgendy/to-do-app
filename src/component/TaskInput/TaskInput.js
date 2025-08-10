
import './TaskInput.css';
function TaskInput({ task, setTask, addTask }) {
  return (
    <div>
      <input
        type="text"
        className="task-input"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="add-task-button" onClick={addTask}>
        Add Task
      </button>
    </div>
  );
}

export default TaskInput;