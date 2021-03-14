import { Query, Resolver } from '@nestjs/graphql';
import { RentalService } from './rental.service';
import { RentalType } from './rental.type';

@Resolver((of) => RentalType)
export class RentalResolver {
  constructor(private rentalService: RentalService) {}

  @Query((returns) => [RentalType])
  rentals() {
    return this.rentalService.getRentals();
  }
}
