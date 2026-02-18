import type { TaskListProps } from "../../types";
import TaskItem from "../TaskItem/TaskItem.tsx";
const TaskList = ({tasks, onStatusChange, onDelete}: TaskListProps) => {

    return(
        <ul>
            
            {tasks.map((task)=> <TaskItem task={task}/>)}
        </ul>

    );
}
export default TaskList;