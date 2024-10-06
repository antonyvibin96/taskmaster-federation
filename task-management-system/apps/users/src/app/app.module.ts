import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserService } from './user.service';
import { AppController } from './app.controller';
import { UserResolver } from './user.resolver'; // Ensure this import is correct

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true, // This option will generate the schema file automatically
    }),
  ],
  controllers: [AppController],
  providers: [UserService, UserResolver],
})
export class AppModule {}
