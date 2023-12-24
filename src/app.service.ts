import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Server is Running on ${process.env.PORT}`;
  }
}
