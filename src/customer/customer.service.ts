import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerService {
  getGenres() {
    return [
      {
        id: '1232',
        name: 'Customer1',
        isGold: false,
        phone: '+213312',
      },
    ];
  }
}
