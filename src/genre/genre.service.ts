import { v4 as uuid } from 'uuid';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGenreInput } from './create-genre.input';
import { Genre } from './genre.entity';

@Injectable()
export class GenreService {
  constructor(
    @InjectRepository(Genre) private genreRepository: Repository<Genre>,
  ) {}

  getGenres() {
    return [{ id: '1', name: 'Comedy' }];
  }

  createGenre(createGenreInput: CreateGenreInput): Promise<Genre> {
    const { name } = createGenreInput;

    const genre = this.genreRepository.create({
      id: uuid(),
      name,
    });

    return this.genreRepository.save(genre);
  }
}
