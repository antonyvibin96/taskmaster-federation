import { Directive, Field, ObjectType } from "@nestjs/graphql";
import { Column, PrimaryGeneratedColumn } from "typeorm";
import { Task } from "./task.entity";

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "userId")')
export class User {
    @Field()
    @PrimaryGeneratedColumn('uuid')
    userId: string;

    @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column()
  role: string;

    // @Field(() => [Task])
    // tasks?: Task[]
}