import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerInput } from './create-customer.input';
import { Customer } from './customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  getCustomers() {
    return this.customerRepository.find();
  }

  createCustomer(createCustomerInput: CreateCustomerInput) {
    const { name, phone, isGold } = createCustomerInput;
    const customer = this.customerRepository.create({
      id: uuid(),
      name,
      phone,
      isGold,
    });

    return this.customerRepository.save(customer);
  }
}
