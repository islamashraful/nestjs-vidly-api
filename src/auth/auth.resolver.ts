import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthResponseType } from './auth-response.type';
import { LoginInput } from './login.input';
import { SignupInput } from './signup.input';
import { UseGuards } from '@nestjs/common';
import { IdentityResponseType } from './identity-response-type';
import { CurrentUser } from 'src/user/current-user.decorator';
import { JwtPayload } from './jwt-payload.interface';
import { GqlAuthGuard } from './gql-auth.guard';

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

  @Query((returns) => IdentityResponseType)
  @UseGuards(GqlAuthGuard)
  whoAmI(@CurrentUser() user: JwtPayload) {
    // TODO: Add input type
    return user;
  }
}
