import { TaskStatus } from '@prisma/client';
export declare class CreateTaskDto {
    title: string;
    status: TaskStatus;
}
