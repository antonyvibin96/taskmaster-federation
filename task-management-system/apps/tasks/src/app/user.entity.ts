import { Directive, Field, ObjectType } from "@nestjs/graphql";
import { PrimaryGeneratedColumn } from "typeorm";
import { Task } from "./task.entity";

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "userId")')
export class User {
    @Field()
    @PrimaryGeneratedColumn('uuid')
    userId: string;

    @Field(() => [Task])
    tasks?: Task[]
}