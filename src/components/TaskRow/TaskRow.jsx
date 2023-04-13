

export const TaskRow = ({task,toggleTask}) =>{
    return(
        <tr>
            <td>
            {task.name}
                <input
                checked={task.done} 
                onChange={()=> toggleTask(task)}
                type="checkbox"
                />
            </td>
        </tr>

    )
}