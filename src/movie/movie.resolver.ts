import { Resolver } from '@nestjs/graphql';
import { MovieType } from './movie.type';

@Resolver((of) => MovieType)
export class MovieResolver {}
