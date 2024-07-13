import './TaskItem.css'

export default function TaskItem({ task, toggleComplete, deleteTask, editTask }) {
  return (
    <li>
      <div className="mySpan">
      <span
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        onClick={toggleComplete}
      >
        {task.name} : {<br></br>} {task.description}
      </span>
      </div>
      {/* Button to edit the task. Clicking calls the editTask function */}
      <button onClick={editTask}>Edit</button>
      {/* Button to delete the task. Clicking calls the deleteTask function */}
      <button onClick={deleteTask}>Delete</button>
    </li>
  );
}
