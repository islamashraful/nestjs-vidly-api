import { v4 as uuid } from 'uuid';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CustomerService } from 'src/customer/customer.service';
import { MovieService } from 'src/movie/movie.service';
import { CreateRentalInput } from './create-rental.input';
import { Repository } from 'typeorm';
import { Rental } from './rental.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RentalService {
  constructor(
    private customerService: CustomerService,
    private movieService: MovieService,
    @InjectRepository(Rental) private rentalRepository: Repository<Rental>,
  ) {}

  getRentals() {
    return [];
  }

  async createRental(createRentalInput: CreateRentalInput) {
    const { customerId, movieId } = createRentalInput;

    await this.customerService.getCustomer(customerId);

    const movie = await this.movieService.getMovie(movieId);
    if (movie.numberInStock === 0) {
      throw new BadRequestException('Movie not available in stock');
    }

    const rental = this.rentalRepository.create({
      id: uuid(),
      customer: customerId,
      movie: movieId,
      dateOut: new Date().toISOString(),
    });

    // TODO: Decrement value of numberInStock

    return this.rentalRepository.save(rental);
  }
}
