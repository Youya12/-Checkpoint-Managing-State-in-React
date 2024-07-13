import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

export default function App() {
  // State to manage the list of tasks
  const [tasks, setTasks] = useState([]);
  // State to manage the task being edited
  const [taskToEdit, setTaskToEdit] = useState(null);

  // useEffect hook to load tasks from local storage when the component mounts
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) setTasks(storedTasks);
  }, []);

  // useEffect hook to save tasks to local storage whenever the tasks state changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Function to add a new task
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Function to edit an existing task
  const editTask = (updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.name === updatedTask.name ? updatedTask : task
      )
    );
    setTaskToEdit(null);
  };

  // Function to delete a task by its index
  const deleteTask = (index) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks(tasks.filter((_, i) => i !== index));
    }
  };

  // Function to toggle the completion status of a task by its index
  const toggleComplete = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Render the main application UI
  return (
    <div>
      <TaskForm addTask={addTask} editTask={editTask} taskToEdit={taskToEdit} />
      <TaskList
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        setTaskToEdit={setTaskToEdit}
      />
    </div>
  );
}
