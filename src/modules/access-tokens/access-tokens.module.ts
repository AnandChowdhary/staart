import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { TokensModule } from '../tokens/tokens.module';
import { AccessTokenController } from './access-tokens.controller';
import { AccessTokensService } from './access-tokens.service';

@Module({
  imports: [PrismaModule, TokensModule],
  controllers: [AccessTokenController],
  providers: [AccessTokensService],
})
export class AccessTokensModule {}
