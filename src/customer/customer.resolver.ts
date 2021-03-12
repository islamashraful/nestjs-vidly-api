import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateCustomerInput } from './create-customer.input';
import { CustomerInput } from './customer.input';
import { CustomerService } from './customer.service';
import { CustomerType } from './customer.type';
import { UpdateCustomerInput } from './update-customer.input';

@Resolver((of) => CustomerType)
export class CustomerResolver {
  constructor(private customerService: CustomerService) {}

  @Query((returns) => [CustomerType])
  customers() {
    return this.customerService.getCustomers();
  }

  @Query((returns) => CustomerType)
  customer(@Args('customerInput') customerInput: CustomerInput) {
    return this.customerService.getCustomer(customerInput.id);
  }

  @Mutation((returns) => CustomerType)
  createCustomer(
    @Args('createCustomerInput') createCustomerInput: CreateCustomerInput,
  ) {
    return this.customerService.createCustomer(createCustomerInput);
  }

  @Mutation((returns) => CustomerType)
  updateCustomer(
    @Args('updateCustomerInput') updateCustomerInput: UpdateCustomerInput,
  ) {
    return this.customerService.updateCustomer(updateCustomerInput);
  }

  // TODO: Reuse UpdateCustomerInput in here and remove CustomerInput
  @Mutation((returns) => CustomerType)
  deleteGenre(@Args('customerInput') customerInput: CustomerInput) {
    return this.customerService.deleteCustomer(customerInput.id);
  }
}
