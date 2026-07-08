import type { TaskCard } from "../../interfaces/taskCard";

const TaskCard = ({ task }: { task: TaskCard }) => {
    return (
        <div>
            <h3>{task.title}</h3>
           <div className="flex justify-between">
                <span>Due Date: {task.dueDate}</span>
                <span> Comments: {task.comments}</span>
            </div>
            <p>Priority: {task.priority}</p>
            <p>{task.description}</p>

            <div>
                <span>
                    responsible {task.developer}
                </span>
                <span>
                    status {task.status}
                </span>
            </div>

            <div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Edit</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
            </div>
        </div>
    );
};

export default TaskCard;