// task.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { TaskService } from './task.service';
import { Task } from './task.entity';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TaskResolver } from './task.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([Task]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
  ],
  providers: [TaskService, TaskResolver],
})
export class TaskModule {}
