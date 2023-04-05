import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    const Hello = 'Hello Word';
    return Hello;
  }
}
