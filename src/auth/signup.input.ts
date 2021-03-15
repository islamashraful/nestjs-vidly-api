import { InputType } from '@nestjs/graphql';
import { CreateUserInput } from 'src/user/create-user.input';

@InputType()
export class SignupInput extends CreateUserInput {}
