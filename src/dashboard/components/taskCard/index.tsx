import type { TaskCardInterface } from "../../interfaces/taskCardInterface";

const TaskCard = ({ task }: { task: TaskCardInterface }) => {
    const { title, dueDate, comments, priority, description, developer, status } = task;
    return (
        <div>
            <h3>{title}</h3>
           <div className="flex justify-between">
                <span>Due Date: {dueDate}</span>
                <span> Comments: {comments}</span>
            </div>
            <p>Priority: {priority}</p>
            <p>{description}</p>

            <div>
                <span>
                    responsible {developer}
                </span>
                <span>
                    status {status}
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