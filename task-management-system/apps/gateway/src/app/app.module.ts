import { Module } from '@nestjs/common';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { IntrospectAndCompose } from '@apollo/gateway';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
            {
              name: 'users', url: 'http://localhost:3000/graphql',
            },
            {
              name: 'tasks', url: 'http://localhost:3001/graphql'
            }
          ]
        })
      }
    })
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
