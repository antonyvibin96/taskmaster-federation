import { Resolver, Query, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.model';


@Resolver(() => User)
export class UserResolver {
  constructor(private readonly appService: UserService) {}

  @Query(() => [User])
  users() {
    return this.appService.getUsers();
  }

  @Query(() => User)
  user(@Args('userId') userId: string) {
    return this.appService.getUser(userId);
  }
}
