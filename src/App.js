import './App.css';
import { useState,useEffect } from 'react';
import TaskCreator from './components/TaskCreator/TaskCreator';
import { TaskTable } from './components/TaskTable/TaskTable';
import { VisibilityControl } from './components/VisibilityControl/VisibilityControl';
import Box from '@mui/material/Box';
import { Container, ThemeProvider, Typography } from '@mui/material';
import { createTheme } from '@mui/material';
import { TaskTableCompleted } from './components/TaskTableCompleted/TaskTableCompleted';


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

  const theme =createTheme({
    palette:{
      primary:{
        main:'#f8f4e4'
      },
      secondary:{
        main:'#4e3f30'
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
    <Container sx={{display:'flex',justifyContent:'center', fontFamily:'sans-serif',background:'#0ca5b0'  }}>
    <Box sx={{background:'#f8f4e4',p:2,margin:'2rem', display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center', border:'solid',borderRadius:'2rem',width:'50%',borderColor:'#4e3f30'}}>
      <Typography variant='h4' sx={{fontWeight:700 ,margin:'1rem',color:'#4e3f30',fontFamily:'sans-serif'}}>My To-Do List</Typography>
      <TaskCreator createNewTask={createNewTask}/>
      <Container sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <TaskTable tasks={taskItems} toggleTask={toggleTask} />
      <VisibilityControl 
      isChecked={showCompleted}
      setShowCompleted={(checked)=>setShowCompleted(checked)}
      cleanTask={cleanTask}      
      />
        {
          showCompleted && (<TaskTableCompleted tasks={taskItems} toggleTask={toggleTask} showCompleted ={showCompleted}/>) 
        }
      </Container>
    </Box>
    </Container>
    </ThemeProvider>
  );
}

export default App;
