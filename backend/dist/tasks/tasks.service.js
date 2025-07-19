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
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
let TasksService = class TasksService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createTaskDto) {
        const newTask = {
            title: createTaskDto.title,
            status: createTaskDto.status,
        };
        return await this.prisma.task.create({
            data: newTask,
        });
    }
    async findAll() {
        return await this.prisma.task.findMany();
    }
    async findOne(id) {
        const findTask = await this.prisma.task.findFirst({
            where: {
                id
            }
        });
        if (!findTask) {
            throw new common_1.NotFoundException("Carro não encontrado");
        }
        return findTask;
    }
    async update(id, updateTaskDto) {
        await this.findOne(id);
        await this.prisma.task.update({
            where: {
                id
            },
            data: updateTaskDto
        });
        return `Task ${id} has updated successfully`;
    }
    async remove(id) {
        await this.findOne(id);
        await this.prisma.task.delete({
            where: {
                id
            },
        });
        return `Task ${id} has deleted successfully`;
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TasksService);
//# sourceMappingURL=tasks.service.js.map