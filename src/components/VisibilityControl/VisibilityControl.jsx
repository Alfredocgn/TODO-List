import React from 'react'
import Button from '@mui/material/Button';
import { Checkbox, Container, Typography } from '@mui/material';

export const VisibilityControl = ({setShowCompleted,cleanTask,isChecked}) => {

    const handleDelete = () =>{
        if(window.confirm('Are you sure you want to delete it?')){
            cleanTask()
        }

    }

  return (
    <Container sx={{display:'flex',justifyContent:'center', alignItems:'center'}}>
        <Checkbox color='secondary' checked={isChecked} type='checkbox' onChange={(e)=>setShowCompleted(e.target.checked)}/>{" "}
        <Typography variant='h5' sx={{color:'#4e3f30',fontWeight:500}}>Completed Tasks</Typography>  
        <Button color='secondary' size='small' variant='contained' onClick={handleDelete} sx={{marginLeft:'2rem'}}>Clear</Button>
    </Container> 
  )
}
