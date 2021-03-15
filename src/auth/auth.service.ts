import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { JwtPayload } from './jwt-payload.interface';
import { LoginInput } from './login.input';
import { SignupInput } from './signup.input';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signUp(signupInput: SignupInput) {
    await this.userService.createUser(signupInput);

    return this.generateJwtToken(signupInput.email);
  }

  async login(loginInput: LoginInput) {
    const user = await this.userService.getUser(loginInput.email);
    if (!user) {
      throw new BadRequestException('Invalid email or password');
    }

    return this.generateJwtToken(loginInput.email);
  }

  generateJwtToken(email: string) {
    const jwtPayload: JwtPayload = {
      email,
    };

    return { accessToken: this.jwtService.sign(jwtPayload) };
  }
}
