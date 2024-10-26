import { ObjectType, Field, Directive } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
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
}
