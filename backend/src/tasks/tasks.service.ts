import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService){}

  // Criar tarefa, recebendo title, status e description e detornando um objeto contendo essas informações
  async create(createTaskDto: CreateTaskDto) {
    const newTask = {
      title: createTaskDto.title,
      status: createTaskDto.status,
      description: createTaskDto.description
    }

    return await this.prisma.task.create({
      data: newTask,
    })
  }

  // Buscar todas as tarefas
  async findAll() {
    return await this.prisma.task.findMany({
      include: { comments: true },
    });
  }
    
  // Buscar uma única tarefa pelo id, retornando os comentários da mesma
  async findOne(id: number) {
    const findTask = await this.prisma.task.findFirst({
      where: {
        id
      },
      include: { comments: true },
    });

    if(!findTask){
      throw new NotFoundException("Tarefa não encontrada")
    }

    return findTask;
  }

  // Atualizar tarefa pelo Id
  async update(id: number, updateTaskDto: UpdateTaskDto) {
    await this.findOne(id);

    await this.prisma.task.update({
      where: {
        id
      },
      data: updateTaskDto
    })

    return `Task ${id} has updated successfully`;
  }

  // Remover tarefa pelo Id
  async remove(id: number) {
    await this.findOne(id);

    await this.prisma.task.delete({
      where: {
        id
      },
    })
    
    return `Task ${id} has deleted successfully`;
  }
}
