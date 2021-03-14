import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieResolver } from './movie.resolver';
import { MovieService } from './movie.service';
import { Movie } from './movie.entity';
import { GenreModule } from 'src/genre/genre.module';

@Module({
  imports: [TypeOrmModule.forFeature([Movie]), GenreModule],
  providers: [MovieService, MovieResolver],
  exports: [MovieService],
})
export class MovieModule {}
