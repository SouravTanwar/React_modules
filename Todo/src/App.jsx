import React, { useState } from 'react';


const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, isEditing: false }]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, isEditing: !task.isEditing } : task
    );
    setTasks(updatedTasks);
  };

  const handleTaskChange = (index, newText) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
  };

  const saveTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, isEditing: false } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-list">
      <h1>TODO List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>ADD</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.isEditing ? (
              <input
                type="text"
                value={task.text}
                onChange={(e) => handleTaskChange(index, e.target.value)}
              />
            ) : (
              <span>{task.text}</span>
            )}
            <button onClick={() => task.isEditing ? saveTask(index) : editTask(index)}>
              {task.isEditing ? 'Save' : 'Edit'}
            </button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
