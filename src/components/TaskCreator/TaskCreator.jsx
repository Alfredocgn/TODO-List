import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';


const TaskCreator = ({createNewTask}) => {
  const [newTaskName,setNewTaskName]= useState('')

  const handleSubmit = (e)=>{
    e.preventDefault()
    createNewTask(newTaskName)
    setNewTaskName('')  
  }
  
  return (
    <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <form onSubmit={handleSubmit}>
        <Container>
        <TextField 
        sx={{background:'#f0f0d8'}}
        size='small'
        id="outlined-basic"
        label="New task..." 
        variant="outlined" 
        type='text' 
        value={newTaskName}
        onChange={(e)=> setNewTaskName(e.target.value)} 
        placeholder='Enter a new task'/>
        <Button size='large' color='secondary' variant='contained' onClick={handleSubmit}>Save Task</Button>
        </Container>
      </form>
    </Box>
  )
}


export default TaskCreator;