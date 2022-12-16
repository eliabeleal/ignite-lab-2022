import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notification',
        brokers: ['172.31.250.45:29092'],
      },
      subscribe: {
        fromBeginning: false,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
