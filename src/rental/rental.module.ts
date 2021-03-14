import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModule } from 'src/customer/customer.module';
import { MovieModule } from 'src/movie/movie.module';
import { Rental } from './rental.entity';
import { RentalResolver } from './rental.resolver';
import { RentalService } from './rental.service';

@Module({
  imports: [TypeOrmModule.forFeature([Rental]), CustomerModule, MovieModule],
  providers: [RentalService, RentalResolver],
})
export class RentalModule {}
