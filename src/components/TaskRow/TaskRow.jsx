import { Checkbox, TableRow, Typography } from "@mui/material"



export const TaskRow = ({task,toggleTask}) =>{
    return(

        <TableRow sx={{display:'flex',alignItems:'center',justifyContent:"flex-start"}}>
            <Typography sx={{color:'#4e3f30',fontWeight:500}}>
            {task.name}
            </Typography>
                <Checkbox
                checked={task.done} 
                onChange={()=> toggleTask(task)}
                type="checkbox"
                color="secondary"
                />
        </TableRow>

    )
}