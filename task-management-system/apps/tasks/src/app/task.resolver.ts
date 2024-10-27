import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { TaskService } from './task.service';
import { Task } from './task.entity';


@Resolver(() => Task)
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Query(() => [Task])
  getTasks() {
    return this.taskService.findAll();
  }

  @Query(() => Task, { name: 'task' })
  getTask(@Args('id', { type: () => String }) id: string) {
    return this.taskService.findById(id);
  }

  @Mutation(() => Task)
  createTask(
    @Args('title') title: string,
    @Args('description') description: string,
    @Args('dueDate', { type: () => String }) dueDate: Date,
    @Args('status') status: string,
    @Args('assigneeId', { type: () => String, nullable: true }) assignee?: string,
  ) {
    return this.taskService.create({ title, description, dueDate, assignee, status });
  }

  @Mutation(() => Task)
  updateTask(
    @Args('id') id: string,
    @Args('title', { nullable: true }) title?: string,
    @Args('description', { nullable: true }) description?: string,
    @Args('status', { nullable: true }) status?: string,
  ) {
    return this.taskService.update(id, { title, description, status });
  }

  @Mutation(() => Task)
  assignUserToTask(
    @Args('taskId') taskId: string,
    @Args('assigneeId') assigneeId: string
  ) {
    return this.taskService.assignUser(taskId, assigneeId);
  }
}
