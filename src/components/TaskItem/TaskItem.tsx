import type{ Task, TaskItemProps} from "../../types";

const TaskItem =({task, onStatusChange, onDelete}: TaskItemProps)=>{
    // task ="",
    // onStatusChange ="",
    // onDelete ="",
    return(
        <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>

            <p>
                <strong>Status</strong>{task.status}
            </p>

            <p>{task.priority}</p>

            <p>
                <strong>Due:</strong> 
                {new Date(task.dueDate).toLocaleDateString()}
            </p>

            {/* Status Change */}
            <select>
                <option value = "pending">pending</option>
                <option value = "in-progress">in-progress</option>
                <option value = "completed">completed</option>
            </select>

            <button onClick={()=>onDelete(task.id)}

            >Delete</button>
        </div>
    );
};

export default TaskItem;