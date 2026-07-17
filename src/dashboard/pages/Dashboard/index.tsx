import DashboardCard from "../../components/dashboardCard";
import GreetingCard from "../../components/greetingCard";
import TaskCard from "../../components/taskCard";
import Filters from "../../components/filters";

const Dashboard = () => {
    return (
        <section>
            <GreetingCard />
            <div>
                <h2>Dashboard</h2>
                <button>
                    Add new Dashboard
                </button>

                <section>
                    Filters: <Filters />
                </section>

                <section>
                    <div>
                        <h2>Dashboard</h2>
                        <button>Add Dashboard</button>
                    </div>
                    <DashboardCard
                        title="Dashboard 1"
                        dueDate="2023-06-30"
                        comments={5}
                        priority="High"
                        description="This is a sample dashboard."
                        responsibles={[
                            {
                                name: "John Doe",
                                avatar: "https://randomuser.me/api/portraits",
                                email: "",
                                role: "Developer",
                                status: "Active",
                                tasks: 10,
                            },
                        ]}
                        status="In Progress"
                        tasks={[
                            {
                                title: "Task 1",
                                dueDate: "2023-06-30",
                                comments: 2,
                                priority: "High",
                                description: "This is a sample task.",
                                developer: "John Doe",
                                status: "In Progress",
                            },
                        ]}
                    />
                </section>

                <section>
                    <div>
                        <h2>Tasks</h2>
                        <button>Add Task</button>
                    </div>

                    <TaskCard task={{
                        title: "Task 1",
                        dueDate: "2023-06-30",
                        comments: 2,
                        priority: "High",
                        description: "This is a sample task.",
                        developer: "John Doe",
                        status: "In Progress",
                    }}>

                    </TaskCard>
                </section>

                <section>
                    ALL COLLABORATORS
                </section>
            </div>
        </section>
    );
};

export default Dashboard;