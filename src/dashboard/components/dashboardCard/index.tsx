import type { DashboardCard } from "../../interfaces/dashboardcard";

const DashboardCard = (dashboard: DashboardCard) => {
    return (
        <div>
            <h2>{dashboard.title}</h2>
            <div>
                <span>
                    Due Date: {dashboard.dueDate}
                </span>
                <span>
                    tasks: {dashboard.tasks.length}
                </span>

                <p>
                    comments: {dashboard.comments}
                </p>

                <div>
                    <div>
                        developers: {dashboard.responsibles.map((user) => (
                            <span key={user.email}>{user.name}</span>
                        ))}
                    </div>
                    <span>
                        status: {dashboard.status}
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