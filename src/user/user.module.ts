// module-name.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserSchema } from './user.schema';
import { databaseConfig } from 'config/database.config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => databaseConfig,
    }),
    MongooseModule.forFeature([{ name: 'users', schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule { }
