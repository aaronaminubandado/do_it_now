import React, { useEffect, useState } from 'react';
import DoItTask from './components/DoItTask';
import { addTask, updateTask, getAllDoItTasks, deleteTask } from './utils/HandleApi';

function App() {
  
  const [task, setTask] = useState([])
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [taskId, setTaskId] = useState("")

  useEffect( () => {
    getAllDoItTasks(setTask)
  }, [])

  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setTaskId(_id)
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Do It Now</h1>
        <div className="top">
          <input 
          type="text" 
          placeholder="Add task..."
          value={text}
          onChange={(e) => setText(e.target.value)}/>
          <div className="add" 
          onClick={isUpdating ? 
            () => updateTask(taskId, text, setTask,setText, setIsUpdating) 
          : () => addTask(text, setText, setTask)}>
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>
        <div className="list">

          {task.map((item) => <DoItTask 
          key={item._id} 
          text={item.text}
          updateMode={() => updateMode(item._id, item.text)}
          deleteTask={() => deleteTask(item._id, setTask)}/>)}

        </div>
      </div>
    </div>
  );
}

export default App;
