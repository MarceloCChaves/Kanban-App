import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/database/prisma.service';
export declare class TasksService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createTaskDto: CreateTaskDto): Promise<{
        id: number;
        title: string;
        status: import(".prisma/client").$Enums.TaskStatus;
        description: string | null;
    }>;
    findAll(): Promise<{
        id: number;
        title: string;
        status: import(".prisma/client").$Enums.TaskStatus;
        description: string | null;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        title: string;
        status: import(".prisma/client").$Enums.TaskStatus;
        description: string | null;
    }>;
    update(id: number, updateTaskDto: UpdateTaskDto): Promise<string>;
    remove(id: number): Promise<string>;
}
