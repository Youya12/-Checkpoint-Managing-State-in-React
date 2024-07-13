import { useState } from 'react';

export default function TaskForm({ addTask, editTask, taskToEdit }) {
  // State to manage the task name, initialized to the taskToEdit name if present
  const [name, setName] = useState(taskToEdit ? taskToEdit.name : '');
  // State to manage the task description, initialized to the taskToEdit description if present
  const [description, setDescription] = useState(taskToEdit ? taskToEdit.description : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description) {
      if (taskToEdit) {
        // If editing a task, call editTask with the updated task details
        editTask({ ...taskToEdit, name, description });
      } else {
        // If adding a new task, call addTask with the new task details
        addTask({ name, description, completed: false });
      }
      // Reset the form fields
      setName('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Task Name" value={name} onChange={(e) => setName(e.target.value)} required/>
      <textarea placeholder="Task Description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
      <button type="submit">
        {taskToEdit ? 'Edit Task' : 'Add Task'}
      </button>
    </form>
  );
}
