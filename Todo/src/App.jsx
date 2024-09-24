import React, { useState } from 'react';
import './App.css';


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

  const saveTask = (text, index) => {
    if(text.trim()===''){
      alert("Todo can't be empty");
      deleteTask(index);
    }
    else{
      const updatedTasks = tasks.map((task, i) =>
        i === index ? { ...task, isEditing: false } : task
      );
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="todo">
      <div className="header">
        <h1>TODO LIST</h1>
        <div className="input-area">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add items..."
          />
          <button onClick={addTask}>ADD</button>
        </div>
      </div>
      <ul className="todo-list">
        {tasks.map((task, index) => (
          <li className="task" key={index}>
            {task.isEditing ? (
              <textarea
                value={task.text}
                onChange={(e) => handleTaskChange(index, e.target.value)}
              />
            ) : (
              <div>{task.text}</div>
            )}
            <div className="btn">
              <button
                onClick={() =>
                  task.isEditing ? saveTask(task.text, index) : editTask(index)
                }
              >
                {task.isEditing ? "Save" : "Edit"}
              </button>
              <button className="Delete" onClick={() => deleteTask(index)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
