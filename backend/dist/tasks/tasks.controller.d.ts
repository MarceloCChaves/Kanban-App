import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    create(createTaskDto: CreateTaskDto): Promise<{
        title: string;
        status: import(".prisma/client").$Enums.TaskStatus;
        description: string | null;
        id: number;
    }>;
    findAll(): Promise<{
        title: string;
        status: import(".prisma/client").$Enums.TaskStatus;
        description: string | null;
        id: number;
    }[]>;
    findOne(id: string): Promise<{
        title: string;
        status: import(".prisma/client").$Enums.TaskStatus;
        description: string | null;
        id: number;
    }>;
    update(id: string, updateTaskDto: UpdateTaskDto): Promise<string>;
    remove(id: string): Promise<string>;
}
