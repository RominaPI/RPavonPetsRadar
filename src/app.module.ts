import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './email/email.module';
import { FoundPetModule } from './found-pet/found-pet.module';
import { LostPetModule } from './lost-pet/lost-pet.module';

@Module({
  imports: [EmailModule, FoundPetModule, LostPetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
