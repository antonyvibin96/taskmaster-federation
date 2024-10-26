import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async findById(id: string): Promise<Task> {
    return this.taskRepository.findOne({ where: { taskId: id } });
  }

  async create(taskData: Partial<Task>): Promise<Task> {
    const task = this.taskRepository.create(taskData);
    return this.taskRepository.save(task);
  }

  async update(id: string, updateData: Partial<Task>): Promise<Task> {
    await this.taskRepository.update(id, updateData);
    return this.taskRepository.findOne({ where: { taskId: id } });
  }

  async assignUser(taskId: string, assigneeId: string): Promise<Task> {
    const task = await this.taskRepository.findOne({ where: { taskId } });
    if (!task) throw new Error('Task not found');
    task.assignee = assigneeId;
    return this.taskRepository.save(task);
  }

  async getAllTasksByUserId(userId: string) {
    return [];
  }
}
