import React, { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

const addTask = () => {
    setTasks([...tasks, { title: newTask, completed: false }]);
    setNewTask('');
};

const removeTask = (taskIndex) => {
    const newTasks = [...tasks];
    newTasks.splice(taskIndex, 1);
    setTasks(newTasks);
};

const toggleCompleted = (taskIndex) => {
    const newTasks = [...tasks];
    newTasks[taskIndex].completed = !newTasks[taskIndex].completed;
    setTasks(newTasks);
};

return (
    <div className='container mt-5 flex-container'>
        <h1 className='text-center'>Todo List</h1>
        <hr />
        <div className='mb-3'>
            <label htmlFor='newTask' className='form-label'>Add New Task</label>
            <input
                type='text'
                id='newTask'
                placeholder='New Task'
                value={newTask}
                onChange={(event) => setNewTask(event.target.value)}
                className='form-control'
            />
        </div>
        <button 
            className='btn btn-primary'
            onClick={addTask}
        >
            Add Task
        </button>
        <ul className='list-group mt-4'>
        {tasks.map((task, index) => (
            <li
            key={index}
            className={`list-group-item ${
                task.completed ? 'list-group-item-success' : ''
            }`}
            >
            <div className='form-check'>
                <input
                    type='checkbox'
                    className='form-check-input'
                    checked={task.completed}
                    onChange={() => toggleCompleted(index)}
                />
                <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                    {task.title}
                </span>
                <button onClick={() => removeTask(index)} className='btn btn-danger btn-sm ml-2 mr-2'>Remove</button>
            </div>
            </li>
        ))}
        </ul>
    </div>
    );
}

export default App;
