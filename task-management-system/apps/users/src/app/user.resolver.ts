import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.model';
import { UpdateUserInput } from './types/update.user.input';


@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  getUsers() {
    return this.userService.getUsers();
  }

  @Query(() => User)
  getUserById(@Args('userId') userId: string) {
    return this.userService.getUserById(userId);
  }

  @Mutation(() => User) 
  createUser(@Args('name') name: string, @Args('email') email: string, @Args('role') role: string) {
    return this.userService.createUser(name, email, role);
  }

  @Mutation(() => User)
  updateUser(@Args('id') id: string, @Args('input') input: UpdateUserInput) {
    return this.userService.updateUser(id, input);
  }
}
