import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@ObjectType()
@Entity()
export class Task {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  taskId: string;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column()
  status: string;

  @Field({nullable: true})
  @Column({nullable: true})
  dueDate: Date;

  @Field({nullable: true})
  @Column({nullable: true})
  assignee: string;

  @Field(() => User)
  user?: User;
}
