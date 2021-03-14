import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genre } from './genre/genre.entity';
import { GenreModule } from './genre/genre.module';
import { CustomerModule } from './customer/customer.module';
import { Customer } from './customer/customer.entity';
import { MovieModule } from './movie/movie.module';
import { Movie } from './movie/movie.entity';
import { ConfigModule } from '@nestjs/config';
import { configuration } from './config/configuration';
import { validationSchema } from './config/validation';
import { RentalModule } from './rental/rental.module';
import { Rental } from './rental/rental.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema,
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.aums2.mongodb.net/nestjs-vidly-api?retryWrites=true&w=majority`,
      synchronize: true,
      useUnifiedTopology: true,
      entities: [Genre, Customer, Movie, Rental],
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    GenreModule,
    CustomerModule,
    MovieModule,
    RentalModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
