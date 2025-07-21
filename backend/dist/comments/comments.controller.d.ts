import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
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
    findOne(id: string): Promise<{
        id: number;
        content: string;
        taskId: number;
        createdAt: Date;
    }>;
    update(id: string, updateCommentDto: UpdateCommentDto): Promise<string>;
    remove(id: string): Promise<string>;
}
