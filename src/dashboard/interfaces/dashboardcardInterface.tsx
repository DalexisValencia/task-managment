import type { TaskCardInterface } from "./taskCardInterface";
import type { UserCardInterface } from "./usersCardInterface";

export interface DashboardCardInterface {
    title: string;
    dueDate: string;
    comments: number;
    priority: string;
    description: string;
    responsibles: UserCardInterface[];
    status: string;
    tasks: TaskCardInterface[];
}