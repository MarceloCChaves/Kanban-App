import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { PrismaService } from 'src/database/prisma.service';
export declare class CommentsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createCommentDto: CreateCommentDto): Promise<{
        id: number;
        content: string;
        taskId: number;
        createdAt: Date;
    }>;
    findAll(): Promise<{
        id: number;
        content: string;
        taskId: number;
        createdAt: Date;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        content: string;
        taskId: number;
        createdAt: Date;
    }>;
    update(id: number, updateCommentDto: UpdateCommentDto): Promise<string>;
    remove(id: number): Promise<string>;
}
