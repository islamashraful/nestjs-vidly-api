import { v4 as uuid } from 'uuid';
import { Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from './movie.entity';
import { CreateMovieInput } from './create-movie.input';
import { GenreService } from 'src/genre/genre.service';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie) private movieRepository: Repository<Movie>,
    private genreService: GenreService,
  ) {}

  getMovies() {
    return this.movieRepository.find();
  }

  async getMovie(id: string) {
    const movie = await this.movieRepository.findOne({ id });
    if (!movie) {
      throw new NotFoundException();
    }

    return movie;
  }

  async deleteMovie(id: string) {
    const movie = await this.getMovie(id);
    const result = await this.movieRepository.delete({ id });
    // TODO: Optimize as like other delete operations
    if (result.affected === 0) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }

    return movie;
  }

  async createMovie(createMovieInput: CreateMovieInput): Promise<Movie> {
    const { title, numberInStock, dailyRentalRate, genre } = createMovieInput;

    await this.genreService.getGenre(genre);

    const movie = this.movieRepository.create({
      id: uuid(),
      title,
      numberInStock,
      dailyRentalRate,
      genre,
    });

    return this.movieRepository.save(movie);
  }
}
