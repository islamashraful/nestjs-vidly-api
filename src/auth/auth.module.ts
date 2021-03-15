import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET, // TODO: Use config module
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, JwtModule, AuthResolver],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
