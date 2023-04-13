import './App.css';
import { useState,useEffect } from 'react';
import TaskCreator from './components/TaskCreator/TaskCreator';
import { TaskTable } from './components/TaskTable/TaskTable';
import { VisibilityControl } from './components/VisibilityControl/VisibilityControl';
import Box from '@mui/material/Box';


function App() {


  const [taskItems,setTaskItems] = useState([])
  const [showCompleted,setShowCompleted] = useState(false)




function createNewTask(taskName){

 if(!taskItems.find(task => task.name === taskName)){
   setTaskItems([...taskItems, {name: taskName, done:false}])
  }
}
  useEffect(()=>{
    let data = localStorage.getItem('tasks');
    if (data){
      setTaskItems(JSON.parse(data))
    }

  },[ ])

  const cleanTask = () =>{
    setTaskItems(taskItems.filter(task => !task.done))
    setShowCompleted(false)

  }

  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(taskItems))

  },[taskItems])

  const toggleTask = task => {
    setTaskItems(
      taskItems.map(t => (t.name === task.name) ? {...t, done: !t.done} : t)
    )
  }

  return (
    <Box sx={{p:2, display:'flex', flexDirection:'column'}}>
      <TaskCreator createNewTask={createNewTask}/>
      <TaskTable tasks={taskItems} toggleTask={toggleTask} />
      <VisibilityControl 
      isChecked={showCompleted}
      setShowCompleted={(checked)=>setShowCompleted(checked)}
      cleanTask={cleanTask}
      
      />    


        {
          showCompleted && (
            <TaskTable tasks={taskItems} toggleTask={toggleTask} showCompleted ={showCompleted}/>      
          ) 
        } 
      
    </Box>
  );
}

export default App;
