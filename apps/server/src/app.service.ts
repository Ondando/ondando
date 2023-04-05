import { Injectable } from '@nestjs/common';
import { IHello } from 'interface';

@Injectable()
export class AppService {
  getHello(): any {
    const Hello: IHello = {
      hello: 'Hello Word',
    };
    return Hello;
  }
}
