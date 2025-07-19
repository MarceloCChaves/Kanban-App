import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService){}

  async create(createTaskDto: CreateTaskDto) {
    const newTask = {
      title: createTaskDto.title,
      status: createTaskDto.status,
    }

    return await this.prisma.task.create({
      data: newTask,
    })
  }

  async findAll() {
    return await this.prisma.task.findMany();
  }

  async findOne(id: number) {
    const findTask = await this.prisma.task.findFirst({
      where: {
        id
      }
    });

    if(!findTask){
      throw new NotFoundException("Carro não encontrado")
    }

    return findTask;
  }

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
