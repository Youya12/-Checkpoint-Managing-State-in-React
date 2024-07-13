import TaskItem from './TaskItem';

export default function TaskList({ tasks, toggleComplete, deleteTask, setTaskToEdit }) {
  return (
    <ul>
      {/* Iterate over the tasks array and render a TaskItem component for each task */}
      {tasks.map((task, index) => (
        <TaskItem
          // Use the index as the key for each TaskItem
          key={index}
          // Pass the task object to the TaskItem component
          task={task}
          // Pass a function to toggle the completion status of the task by its index
          toggleComplete={() => toggleComplete(index)}
          // Pass a function to delete the task by its index
          deleteTask={() => deleteTask(index)}
          // Pass a function to set the task to be edited
          editTask={() => setTaskToEdit(task)}
        />
      ))}
    </ul>
  );
}
