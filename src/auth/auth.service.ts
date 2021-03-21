import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
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

  async login({ email, password }: LoginInput) {
    const user = await this.userService.validateUserPassword(email, password);
    if (user) {
      return this.generateJwtToken(email);
    } else {
      throw new UnauthorizedException('Invalid credentials.');
    }
  }

  generateJwtToken(email: string) {
    const jwtPayload: JwtPayload = {
      email,
    };

    return { accessToken: this.jwtService.sign(jwtPayload) };
  }

  verifyJwtToken(token: string) {
    return this.jwtService.verify<JwtPayload>(token);
  }
}
