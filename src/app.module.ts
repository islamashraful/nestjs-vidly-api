import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genre } from './genre/genre.entity';
import { GenreModule } from './genre/genre.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.aums2.mongodb.net/nestjs-graphql?retryWrites=true&w=majority`,
      synchronize: true,
      useUnifiedTopology: true,
      entities: [Genre],
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    GenreModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
