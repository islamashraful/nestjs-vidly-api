import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerInput } from './create-customer.input';
import { Customer } from './customer.entity';
import { UpdateCustomerInput } from './update-customer.input';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  getCustomers() {
    return this.customerRepository.find();
  }

  async getCustomer(id: string) {
    const customer = await this.customerRepository.findOne({ id });
    if (!customer) {
      throw new NotFoundException('Customer with the given ID not found');
    }

    return customer;
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

  async updateCustomer(
    updateCustomerInput: UpdateCustomerInput,
  ): Promise<Customer> {
    const { id, name, phone, isGold } = updateCustomerInput;
    const customer = await this.getCustomer(id);

    // TODO: Conditionally update fields, user might not want to update all fields
    customer.name = name;
    customer.phone = phone;
    customer.isGold = isGold;

    return this.customerRepository.save(customer);
  }

  async deleteCustomer(id: string) {
    // TODO: Optimize here. Support return nullable value from resolver
    const customer = await this.getCustomer(id);
    const result = await this.customerRepository.delete({ id });

    if (result.affected === 0) {
      throw new NotFoundException(`Customer with ID ${id} not found`);
    }

    return customer;
  }
}
