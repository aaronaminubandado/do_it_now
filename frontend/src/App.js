import React, { useEffect, useState } from 'react';
import DoItTask from './components/DoItTask';
import { getAllDoItTasks } from './utils/HandleApi';

function App() {
  
  const [task, setTask] = useState([])

  useEffect( () => {
    getAllDoItTasks(setTask)
  }, [])

  return (
    <div className="App">
      <div className="container">
        <h1>Do It Now</h1>
        <div className="top">
          <input type="text" placeholder="Add task"/>
          <div className="add">Add</div>
        </div>
        <div className="list">

          {task.map((item) => <DoItTask key={item._id} text={item.text}/>)}

        </div>
      </div>
    </div>
  );
}

export default App;
