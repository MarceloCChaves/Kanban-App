import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    create(createCommentDto: CreateCommentDto): Promise<{
        id: number;
        content: string;
        createdAt: Date;
        taskId: number;
    }>;
    findAll(): Promise<{
        id: number;
        content: string;
        createdAt: Date;
        taskId: number;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        content: string;
        createdAt: Date;
        taskId: number;
    }>;
    update(id: string, updateCommentDto: UpdateCommentDto): Promise<string>;
    remove(id: string): Promise<string>;
}
