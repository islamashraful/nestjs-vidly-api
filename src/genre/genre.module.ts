import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Genre } from './genre.entity';
import { GenreResolver } from './genre.resolver';
import { GenreService } from './genre.service';

@Module({
  imports: [TypeOrmModule.forFeature([Genre]), AuthModule],
  providers: [GenreResolver, GenreService],
  exports: [GenreService],
})
export class GenreModule {}
