import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    create(createTaskDto: CreateTaskDto): Promise<{
        id: number;
        title: string;
        status: import(".prisma/client").$Enums.TaskStatus;
        description: string | null;
    }>;
    findAll(): Promise<({
        comments: {
            id: number;
            content: string;
            createdAt: Date;
            taskId: number;
        }[];
    } & {
        id: number;
        title: string;
        status: import(".prisma/client").$Enums.TaskStatus;
        description: string | null;
    })[]>;
    findOne(id: string): Promise<{
        comments: {
            id: number;
            content: string;
            createdAt: Date;
            taskId: number;
        }[];
    } & {
        id: number;
        title: string;
        status: import(".prisma/client").$Enums.TaskStatus;
        description: string | null;
    }>;
    update(id: string, updateTaskDto: UpdateTaskDto): Promise<string>;
    remove(id: string): Promise<string>;
}
