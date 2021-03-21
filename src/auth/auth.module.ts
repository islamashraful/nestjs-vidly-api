import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { GqlAuthGuard } from './gql-auth.guard';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: 'JWT_SECRET', // TODO: Use config module
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, JwtModule, AuthResolver, GqlAuthGuard],
  exports: [AuthService, JwtModule, GqlAuthGuard],
})
export class AuthModule {}
