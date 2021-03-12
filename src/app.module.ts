import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { GenreModule } from './genre/genre.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    GenreModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
