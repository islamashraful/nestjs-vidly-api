import { Resolver, Query } from '@nestjs/graphql';
import { GenreService } from './genre.service';
import { GenreType } from './genre.type';

@Resolver((of) => GenreType)
export class GenreResolver {
  constructor(private genreService: GenreService) {}

  @Query((returns) => [GenreType])
  genres() {
    return this.genreService.getGenres();
  }
}
