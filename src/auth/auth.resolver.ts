import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthResponseType } from './auth-response.type';
import { LoginInput } from './login.input';
import { SignupInput } from './signup.input';

@Resolver((of) => 'Auth')
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation((returns) => AuthResponseType)
  login(@Args('loginInput') loginInput: LoginInput) {
    return this.authService.login(loginInput);
  }

  @Mutation((returns) => AuthResponseType)
  signUp(@Args('signupInput') signupInput: SignupInput) {
    return this.authService.signUp(signupInput);
  }
}
