import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieResolver } from './movie.resolver';
import { MovieService } from './movie.service';
import { Movie } from './movie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Movie])],
  providers: [MovieService, MovieResolver],
})
export class MovieModule {}
