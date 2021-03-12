import { Query, Resolver } from '@nestjs/graphql';
import { CustomerService } from './customer.service';
import { CustomerType } from './customer.type';

@Resolver((of) => CustomerType)
export class CustomerResolver {
  constructor(private customerService: CustomerService) {}

  @Query((returns) => [CustomerType])
  customers() {
    return this.customerService.getGenres();
  }
}
