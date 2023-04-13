import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


const TaskCreator = ({createNewTask}) => {
  const [newTaskName,setNewTaskName]= useState('')

  const handleSubmit = (e)=>{
    e.preventDefault()
    createNewTask(newTaskName)
    setNewTaskName('')  
  }

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <TextField 
        id="outlined-basic"
        label="Outlined" 
        variant="outlined" 
        type='text' 
        value={newTaskName}
        onChange={(e)=> setNewTaskName(e.target.value)} 
        placeholder='Enter a new task'/>
        <Button variant='outlined'>Save Task</Button>
      </form>
    </Box>
  )
}


export default TaskCreator;