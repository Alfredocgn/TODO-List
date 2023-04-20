import { TableBody, TableContainer, TableHead, TableRow, Typography,Table,TableCell } from "@mui/material"
import { TaskRow } from "../TaskRow/TaskRow"


export const TaskTable = ({tasks, toggleTask,showCompleted = false}) =>{

    const taskTableRows = (doneValue) =>{

        return(
            

                tasks
                .filter(task=> task.done === doneValue)
                .map(task => (
                    <TaskRow toggleTask={toggleTask} task={task} key={task.name}/>
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

                                {taskTableRows(showCompleted)}  
                            </TableBody>
                        </TableHead>
                    </Table>
                </TableContainer>
    )
}