import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { User } from "./user.entity";
import { TaskService } from "./task.service";
import { Task } from "./task.entity";

@Resolver(() => User)
export class UserResolver {
    constructor(private readonly taskService: TaskService) {}

    @ResolveField(() => [Task])
    public async tasks(@Parent() user: User): Promise<Task[]> {
        return this.taskService.getAllTasksByUserId(user.userId);
    }
}