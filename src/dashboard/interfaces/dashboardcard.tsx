import type { TaskCard } from "./taskCard";
import type { UserCard } from "./usersCard";

export interface DashboardCard {
    title: string;
    dueDate: string;
    comments: number;
    priority: string;
    description: string;
    responsibles: UserCard[];
    status: string;
    tasks: TaskCard[];
}