import { Module } from '@nestjs/common';
import { DirectMessageController } from './direct-message.controller';
import { DirectMessageService } from './direct-message.service';

@Module({
  controllers: [DirectMessageController],
  providers: [DirectMessageService],
  exports: [DirectMessageService],
})
export class DirectMessageModule {}
