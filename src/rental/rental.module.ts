import { Module } from '@nestjs/common';
import { RentalResolver } from './rental.resolver';
import { RentalService } from './rental.service';

@Module({
  providers: [RentalService, RentalResolver],
})
export class RentalModule {}
