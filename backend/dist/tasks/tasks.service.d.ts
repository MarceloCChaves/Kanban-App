import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/database/prisma.service';
export declare class TasksService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createTaskDto: CreateTaskDto): Promise<{
        title: string;
        status: import(".prisma/client").$Enums.TaskStatus;
        id: number;
    }>;
    findAll(): Promise<{
        title: string;
        status: import(".prisma/client").$Enums.TaskStatus;
        id: number;
    }[]>;
    findOne(id: number): Promise<{
        title: string;
        status: import(".prisma/client").$Enums.TaskStatus;
        id: number;
    }>;
    update(id: number, updateTaskDto: UpdateTaskDto): Promise<string>;
    remove(id: number): Promise<string>;
}
