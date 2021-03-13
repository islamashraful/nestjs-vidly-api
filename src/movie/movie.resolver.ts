import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { GenreService } from 'src/genre/genre.service';
import { CreateMovieInput } from './create-movie.input';
import { Movie } from './movie.entity';
import { MovieInput } from './movie.input';
import { MovieService } from './movie.service';
import { MovieType } from './movie.type';
import { UpdateMovieInput } from './update-movie.input';

@Resolver((of) => MovieType)
export class MovieResolver {
  constructor(
    private movieService: MovieService,
    private genreService: GenreService,
  ) {}

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

  @ResolveField()
  async genre(@Parent() movie: Movie) {
    return this.genreService.getGenre(movie.genre);
  }
}
