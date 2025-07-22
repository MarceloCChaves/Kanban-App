import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class CommentsService {
  constructor(private readonly prisma: PrismaService){}

  // Criar comentário, associando com uma tarefa, retornando o content e o id da tarefa a qual esse comentário está associado 
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

  // Buscar todas os comentários pela ordem decrescente
  async findAll() {
    return await this.prisma.comment.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  // Buscar um único comentário
  async findOne(id: number) {
    const comment = await this.prisma.comment.findUnique({
      where: { id },
    });

    if (!comment) {
      throw new NotFoundException(`Comentário com ID ${id} não encontrado`);
    }

    return comment;
  }

  // Atualizar tarefa, a partir de seu ID
  async update(id: number, updateCommentDto: UpdateCommentDto) {
    await this.findOne(id);

    await this.prisma.comment.update({
      where: { id },
      data: updateCommentDto,
    });

    return `Comentário ${id} atualizado com sucesso`;
  }

   // Remover tarefa, a partir de seu ID
  async remove(id: number) {
    await this.findOne(id);

    await this.prisma.comment.delete({
      where: { id },
    });

    return `Comentário ${id} removido com sucesso`;
  }
}
