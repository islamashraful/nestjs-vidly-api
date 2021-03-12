import { v4 as uuid } from 'uuid';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGenreInput } from './create-genre.input';
import { Genre } from './genre.entity';

@Injectable()
export class GenreService {
  constructor(
    @InjectRepository(Genre) private genreRepository: Repository<Genre>,
  ) {}

  getGenres(): Promise<Genre[]> {
    return this.genreRepository.find();
  }

  async getGenre(id: string): Promise<Genre> {
    const genre = await this.genreRepository.findOne({ id });
    if (!genre) {
      throw new NotFoundException();
    }

    return genre;
  }

  createGenre(createGenreInput: CreateGenreInput): Promise<Genre> {
    const { name } = createGenreInput;

    const genre = this.genreRepository.create({
      id: uuid(),
      name,
    });

    return this.genreRepository.save(genre);
  }

  async updateGenre(id: string, name: string): Promise<Genre> {
    const genre = await this.getGenre(id);
    genre.name = name;

    return this.genreRepository.save(genre);
  }

  async deleteGenre(id: string) {
    // TODO: Optimize here. Support return nullable value from resolver
    const genre = await this.getGenre(id);
    const result = await this.genreRepository.delete({ id });

    if (result.affected === 0) {
      throw new NotFoundException(`Genre with ID ${id} not found`);
    }

    return genre;
  }
}
