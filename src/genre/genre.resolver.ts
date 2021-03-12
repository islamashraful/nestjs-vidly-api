import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateGenreInput } from './create-genre.input';
import { GenreInput } from './genre.input';
import { GenreService } from './genre.service';
import { GenreType } from './genre.type';
import { UpdateGenreInput } from './update-genre.input';

@Resolver((of) => GenreType)
export class GenreResolver {
  constructor(private genreService: GenreService) {}

  @Query((returns) => [GenreType])
  genres() {
    return this.genreService.getGenres();
  }

  @Query((returns) => GenreType)
  genre(@Args('genreInput') genreInput: GenreInput) {
    return this.genreService.getGenre(genreInput.id);
  }

  @Mutation((returns) => GenreType)
  createGenre(@Args('createStudentInput') createGenreInput: CreateGenreInput) {
    return this.genreService.createGenre(createGenreInput);
  }

  @Mutation((returns) => GenreType)
  updateGenre(@Args('updateGenreInput') updateGenreInput: UpdateGenreInput) {
    const { id, name } = updateGenreInput;

    return this.genreService.updateGenre(id, name);
  }

  @Mutation((returns) => GenreType)
  deleteGenre(@Args('genreInput') genreInput: GenreInput) {
    return this.genreService.deleteGenre(genreInput.id);
  }
}
