import { v4 as uuid } from 'uuid';
import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateUserInput } from './create-user.input';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  getUser(email: string) {
    return this.userRepository.findOne({ email });
  }

  async createUser(createUserInput: CreateUserInput) {
    const { name, email, password } = createUserInput;

    try {
      const user = this.userRepository.create({
        id: uuid(),
        name,
        email,
        password,
      });
      await this.userRepository.save(user);
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Email already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
