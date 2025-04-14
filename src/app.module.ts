import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes ConfigService available app-wide
    }),
   
      MongooseModule.forRoot('mongodb://localhost/nest-repo-pattern'), // replace with your URI
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
