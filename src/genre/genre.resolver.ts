import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateGenreInput } from './create-genre.input';
import { GenreService } from './genre.service';
import { GenreType } from './genre.type';

@Resolver((of) => GenreType)
export class GenreResolver {
  constructor(private genreService: GenreService) {}

  @Query((returns) => [GenreType])
  genres() {
    return this.genreService.getGenres();
  }

  @Mutation((returns) => GenreType)
  createGenre(@Args('createStudentInput') createGenreInput: CreateGenreInput) {
    return this.genreService.createGenre(createGenreInput);
  }
}
