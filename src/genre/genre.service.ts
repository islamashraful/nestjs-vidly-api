import { Injectable } from '@nestjs/common';

@Injectable()
export class GenreService {
  getGenres() {
    return [{ id: '1', name: 'Comedy' }];
  }
}
