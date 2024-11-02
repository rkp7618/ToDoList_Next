"use client";
import React, { useState } from 'react';

// Main To-Do List Component
const Page = () => {
  // State to track the current task name and description
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");

  // State to store the list of all tasks
  const [mainTask, setMainTask] = useState([]);

  // Handler for form submission
  const submitHandler = (e) => {
    e.preventDefault(); // Prevents the page from reloading on form submission

    // Add the new task to the mainTask array
    setMainTask([...mainTask, { task, desc }]);

    // Clear the input fields after adding the task
    setTask("");
    setDesc("");

    // Log the updated task list (for debugging purposes)
    console.log(mainTask);
  };

  const deleteHandler=(i)=>{
    let copyTask=[...mainTask]
    copyTask.splice(i)
    setMainTask(copyTask)
  }

  // Renders tasks or a default message if no tasks are available
  const renderTasks = mainTask.length === 0 ? (
    <h2>No task available</h2> // Default message when task list is empty
  ) : (
    mainTask.map((t, i) => {
      return (
      <li key={i} className='flex items-center justify-between bg-green-200 my-2'>
        <div className='flex justify-between mb-5 w-2/3'>
          <h5 className='font-semibold text-xl'>{t.task}</h5>
          <h6 className='font-semibold text-xl'>{t.desc}</h6>
        </div>
        <button onClick={()=>{deleteHandler(i)}} className='bg-red-400 text-black font-bold rounded-md p-3 m-3'>Delete</button>             
      </li>)
})
  );

  // Main JSX structure for the component
  return (
    <div className='bg-green-200'>
      {/* Title of the To-Do List */}
      <h1 className='bg-black text-white p-5 text-xl text-center'>Rahul's To Do List</h1>

      {/* Form for adding new tasks */}
      <form onSubmit={submitHandler}>
        
        {/* Input field for task name */}
        <input 
          type='text' 
          className='border-zinc-950 text-2xl border-2 m-5 p-2' 
          placeholder='Enter Task here' 
          value={task} 
          onChange={(e) => setTask(e.target.value)} // Updates task name
        />

        {/* Input field for task description */}
        <input 
          type='text' 
          className='border-zinc-950 text-2xl border-2 m-5 p-2' 
          placeholder='Enter description here'
          value={desc}
          onChange={(e) => setDesc(e.target.value)} // Updates task description
        />

        {/* Submit button to add the task */}
        <button className='bg-yellow-400 text-black rounded p-2 m-5 font-bold'>Add Task</button>
      </form>

      <hr />

      {/* Task list display area */}
      <div className='p-8 bg-zinc-100'>
        <ul>{renderTasks}</ul> {/* Renders tasks or default message */}
      </div>
    </div>
  );
};

export default Page;
