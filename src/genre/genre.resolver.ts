import { Logger } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateGenreInput } from './create-genre.input';
import { GenreInput } from './genre.input';
import { GenreService } from './genre.service';
import { GenreType } from './genre.type';
import { UpdateGenreInput } from './update-genre.input';

@Resolver((of) => GenreType)
export class GenreResolver {
  private logger = new Logger(GenreResolver.name);

  constructor(private genreService: GenreService) {}

  @Query((returns) => [GenreType])
  genres() {
    this.logger.verbose('Getting all genres.');
    this.logger.debug(`Query: genres`);

    return this.genreService.getGenres();
  }

  @Query((returns) => GenreType)
  genre(@Args('genreInput') genreInput: GenreInput) {
    this.logger.verbose(
      `Getting genre with input ${JSON.stringify(genreInput)}.`,
    );
    this.logger.debug(
      `Query: genre, genreInput: ${JSON.stringify(genreInput)}`,
    );

    return this.genreService.getGenre(genreInput.id);
  }

  @Mutation((returns) => GenreType)
  createGenre(@Args('createGenreInput') createGenreInput: CreateGenreInput) {
    this.logger.verbose(
      `Creating genre with input ${JSON.stringify(createGenreInput)}.`,
    );
    this.logger.debug(
      `Mutation: createGenre, createGenreInput:${JSON.stringify(
        createGenreInput,
      )}`,
    );

    return this.genreService.createGenre(createGenreInput);
  }

  @Mutation((returns) => GenreType)
  updateGenre(@Args('updateGenreInput') updateGenreInput: UpdateGenreInput) {
    this.logger.verbose(
      `Updating genre with input ${JSON.stringify(updateGenreInput)}.`,
    );
    this.logger.debug(
      `Mutation: updateGenre, updateGenreInput:${JSON.stringify(
        updateGenreInput,
      )}`,
    );

    const { id, name } = updateGenreInput;

    return this.genreService.updateGenre(id, name);
  }

  @Mutation((returns) => GenreType)
  deleteGenre(@Args('genreInput') genreInput: GenreInput) {
    this.logger.verbose(
      `Deleting genre with input ${JSON.stringify(genreInput)}.`,
    );
    this.logger.debug(
      `Mutation: deleteGenre, genreInput:${JSON.stringify(genreInput)}`,
    );

    return this.genreService.deleteGenre(genreInput.id);
  }
}
