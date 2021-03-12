import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateCustomerInput } from './create-customer.input';
import { CustomerService } from './customer.service';
import { CustomerType } from './customer.type';

@Resolver((of) => CustomerType)
export class CustomerResolver {
  constructor(private customerService: CustomerService) {}

  @Query((returns) => [CustomerType])
  customers() {
    return this.customerService.getCustomers();
  }

  @Mutation((returns) => CustomerType)
  createCustomer(
    @Args('createCustomerInput') createCustomerInput: CreateCustomerInput,
  ) {
    return this.customerService.createCustomer(createCustomerInput);
  }
}
