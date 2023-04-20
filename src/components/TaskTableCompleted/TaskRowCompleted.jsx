import { Checkbox, TableRow, Typography } from "@mui/material"



export const TaskRowCompleted = ({task,toggleTask}) =>{
    return(

        <TableRow sx={{display:'flex',alignItems:'center',justifyContent:"flex-start"}}>
            <Typography sx={{color:'#4e3f30',fontWeight:500,textDecoration:'line-through'}}>
            {task.name}
            </Typography>
        </TableRow>

    )
}