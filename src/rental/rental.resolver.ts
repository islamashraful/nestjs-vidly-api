import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Customer } from 'src/customer/customer.entity';
import { CustomerService } from 'src/customer/customer.service';
import { MovieService } from 'src/movie/movie.service';
import { CreateRentalInput } from './create-rental.input';
import { Rental } from './rental.entity';
import { RentalService } from './rental.service';
import { RentalType } from './rental.type';

@Resolver((of) => RentalType)
export class RentalResolver {
  constructor(
    private rentalService: RentalService,
    private customerService: CustomerService,
    private movieService: MovieService,
  ) {}

  @Query((returns) => [RentalType])
  rentals() {
    return this.rentalService.getRentals();
  }

  @Mutation((returns) => RentalType)
  createRental(
    @Args('createRentalInput') createRentalInput: CreateRentalInput,
  ) {
    return this.rentalService.createRental(createRentalInput);
  }

  @ResolveField()
  async customer(@Parent() rental: Rental) {
    return this.customerService.getCustomer(rental.customer);
  }

  @ResolveField()
  async movie(@Parent() rental: Rental) {
    return this.movieService.getMovie(rental.movie);
  }
}
