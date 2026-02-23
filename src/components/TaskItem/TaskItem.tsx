import type{ Task, TaskItemProps} from "../../types";

const TaskItem =({task, onStatusChange, onDelete}: TaskItemProps)=>{


    // task ="",
    // onStatusChange ="",
    // onDelete ="",
    // return(
    //     <div>
    //         <h3>{task.title}</h3>
    //         <p>{task.description}</p>
            

    //         <p>
    //             <strong>Status</strong>{task.status}
    //         </p>

    //         <p>{task.priority}</p>

    //         <p>
    //             <strong>Due:</strong> 
    //             {new Date(task.dueDate).toLocaleDateString()}
    //         </p>

    //         {/* Status Change */}
    //         <select>
    //             <option value = "pending">pending</option>
    //             <option value = "in-progress">in-progress</option>
    //             <option value = "completed">completed</option>
    //         </select>

    //         <button onClick={()=>onDelete(task.id)}

    //         >Delete</button>
    //     </div>
    // );

    return(
        <div className="space-y-4 m-2">
        <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-black dark:border-gray-700">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold">{task.title}</h3>
              <p className="text-gray-600">{task.description} 1</p>
            </div>
            <div className="flex gap-2">
              <select className="px-2 py-1 rounded bg-white mx-2 bg-yellow-100 text-yellow-800">
                <option value="pending">{task.status}</option>
                <option value="in-progress">{task.status}</option>
                <option value="completed">{task.status}</option>
              </select>
              <button className="text-red-500 hover:text-red-700" onClick={() => onDelete(task.id)}>Delete</button>
            </div>
          </div>
          <div className="mt-2 flex gap-4 text-sm">
            <span className="text-green-600">{task.priority}</span>
            <span className="text-gray-500">Due: 12/31/2023</span>
          </div>
        </div>
        </div>
    )
};

export default TaskItem;