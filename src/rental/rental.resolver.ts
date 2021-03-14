import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateRentalInput } from './create-rental.input';
import { RentalService } from './rental.service';
import { RentalType } from './rental.type';

@Resolver((of) => RentalType)
export class RentalResolver {
  constructor(private rentalService: RentalService) {}

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
}
