import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule?.forRoot({ isGlobal: true }),
    MongooseModule?.forRoot(process.env.MONGODB_URI as string),
    UsersModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
