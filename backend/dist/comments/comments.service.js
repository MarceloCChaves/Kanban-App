"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
let CommentsService = class CommentsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createCommentDto) {
        const task = await this.prisma.task.findUnique({
            where: { id: createCommentDto.taskId },
        });
        if (!task) {
            throw new common_1.NotFoundException(`Tarefa com ID ${createCommentDto.taskId} não encontrada`);
        }
        const newComment = {
            content: createCommentDto.content,
            taskId: createCommentDto.taskId,
        };
        return await this.prisma.comment.create({
            data: newComment,
        });
    }
    async findAll() {
        return await this.prisma.comment.findMany({
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        const comment = await this.prisma.comment.findUnique({
            where: { id },
        });
        if (!comment) {
            throw new common_1.NotFoundException(`Comentário com ID ${id} não encontrado`);
        }
        return comment;
    }
    async update(id, updateCommentDto) {
        await this.findOne(id);
        await this.prisma.comment.update({
            where: { id },
            data: updateCommentDto,
        });
        return `Comentário ${id} atualizado com sucesso`;
    }
    async remove(id) {
        await this.findOne(id);
        await this.prisma.comment.delete({
            where: { id },
        });
        return `Comentário ${id} removido com sucesso`;
    }
};
exports.CommentsService = CommentsService;
exports.CommentsService = CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CommentsService);
//# sourceMappingURL=comments.service.js.map