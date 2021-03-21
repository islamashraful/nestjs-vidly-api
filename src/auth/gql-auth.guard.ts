import {
  Injectable,
  CanActivate,
  ExecutionContext,
  BadRequestException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthService } from './auth.service';

@Injectable()
export class GqlAuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = this.getRequest(context);

    const authHeader = req.headers.authorization as string;
    if (!authHeader) {
      throw new BadRequestException('Authorization header not found.');
    }

    const [type, token] = authHeader.split(' ');
    if (type !== 'Bearer') {
      throw new BadRequestException(
        `Authentication type \'Bearer\' required. Found \'${type}\'`,
      );
    }

    try {
      const decoded = this.authService.verifyJwtToken(token);
      req.user = decoded;
      return true;
    } catch (ex) {
      throw new BadRequestException('Invalid token');
    }
  }
}
