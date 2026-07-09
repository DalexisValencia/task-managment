import type { DashboardCardInterface } from "../../interfaces/dashboardcardInterface";

const DashboardCard = (dashboard: DashboardCardInterface) => {
    const {
        title,
        dueDate,
        comments,
        responsibles,
        status,
        tasks
    } = dashboard;

    return (
        <div>
            <h2>{title}</h2>
            <div>
                <span>
                    Due Date: {dueDate}
                </span>
                <span>
                    tasks: {tasks.length}
                </span>

                <p>
                    comments: {comments}
                </p>

                <div>
                    <div>
                        developers: {responsibles.map((user) => (
                            <span key={user.email}>{user.name}</span>
                        ))}
                    </div>
                    <span>
                        status: {status}
                    </span>
                </div>

                <div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Edit</button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
                </div>
            </div>

        </div>
    );
};

export default DashboardCard;