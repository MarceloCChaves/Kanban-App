import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class CommentsService {
  constructor(private readonly prisma: PrismaService){}
  async create(createCommentDto: CreateCommentDto) {
    const task = await this.prisma.task.findUnique({
      where: { id: createCommentDto.taskId },
    });

    if (!task) {
      throw new NotFoundException(`Tarefa com ID ${createCommentDto.taskId} não encontrada`);
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

  async findOne(id: number) {
    const comment = await this.prisma.comment.findUnique({
      where: { id },
    });

    if (!comment) {
      throw new NotFoundException(`Comentário com ID ${id} não encontrado`);
    }

    return comment;
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    await this.findOne(id);

    await this.prisma.comment.update({
      where: { id },
      data: updateCommentDto,
    });

    return `Comentário ${id} atualizado com sucesso`;
  }

  async remove(id: number) {
    await this.findOne(id);

    await this.prisma.comment.delete({
      where: { id },
    });

    return `Comentário ${id} removido com sucesso`;
  }
}
