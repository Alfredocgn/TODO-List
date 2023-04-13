import React from 'react'
import Button from '@mui/material/Button';

export const VisibilityControl = ({setShowCompleted,cleanTask,isChecked}) => {

    const handleDelete = () =>{
        if(window.confirm('Are you sure you want to delete it?')){
            cleanTask()
        }

    }

  return (
    <div>
        <input checked={isChecked} type='checkbox' onChange={(e)=>setShowCompleted(e.target.checked)}/>{" "}<label>Show Tasks Done</label>  
        <Button variant='outlined' onClick={handleDelete}>Clear</Button>
    </div> 
  )
}
