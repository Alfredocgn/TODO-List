import { TableBody, TableContainer, TableHead, TableRow, Typography,Table,TableCell } from "@mui/material"
import { TaskRowCompleted } from "./TaskRowCompleted"


export const TaskTableCompleted = ({tasks, toggleTask,showCompleted = false}) =>{

    const taskTableRowsCompleted = (doneValue) =>{

        return(
            

                tasks
                .filter(task=> task.done === doneValue)
                .map(task => (
                    <TaskRowCompleted toggleTask={toggleTask} task={task} key={task.name}/>
            ))


        )

    }

    return(
                <TableContainer sx={{width:'100%',maxWidth:360,}}>
                    <Table sx={{display:'flex',justifyContent:'center'}}>

                        <TableHead>
                                <TableRow>
                                    <TableCell sx={{display:'flex',justifyContent:'center'}}><Typography sx={{color:'#4e3f30',fontWeight:500}} variant="h5">Tasks</Typography></TableCell>
                                </TableRow>
                            <TableBody sx={{display:'box',justifyContent:"flex-start"}}> 

                                {taskTableRowsCompleted(showCompleted)}  
                            </TableBody>
                        </TableHead>
                    </Table>
                </TableContainer>
    )
}