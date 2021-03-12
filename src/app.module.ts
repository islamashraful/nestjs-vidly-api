import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genre } from './genre/genre.entity';
import { GenreModule } from './genre/genre.module';
import { CustomerModule } from './customer/customer.module';
import { Customer } from './customer/customer.entity';
import { MovieModule } from './movie/movie.module';
import { Movie } from './movie/movie.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.aums2.mongodb.net/nestjs-graphql?retryWrites=true&w=majority`,
      synchronize: true,
      useUnifiedTopology: true,
      entities: [Genre, Customer, Movie],
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    GenreModule,
    CustomerModule,
    MovieModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
