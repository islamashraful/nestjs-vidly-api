import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateMovieInput } from './create-movie.input';
import { MovieInput } from './movie.input';
import { MovieService } from './movie.service';
import { MovieType } from './movie.type';
import { UpdateMovieInput } from './update-movie.input';

@Resolver((of) => MovieType)
export class MovieResolver {
  constructor(private movieService: MovieService) {}

  @Query((returns) => [MovieType])
  movies() {
    return this.movieService.getMovies();
  }

  @Query((returns) => MovieType)
  movie(@Args('movieInput') movieInput: MovieInput) {
    return this.movieService.getMovie(movieInput.id);
  }

  @Mutation((returns) => MovieType)
  deleteMovie(@Args('movieInput') movieInput: MovieInput) {
    return this.movieService.deleteMovie(movieInput.id);
  }

  @Mutation((returns) => MovieType)
  createMovie(@Args('createMovieInput') createMovieInput: CreateMovieInput) {
    return this.movieService.createMovie(createMovieInput);
  }

  @Mutation((returns) => MovieType)
  updateMovie(@Args('updateMovieInput') updateMovieInput: UpdateMovieInput) {
    return this.movieService.updateMovie(updateMovieInput);
  }
}
