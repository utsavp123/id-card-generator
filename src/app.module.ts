import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { databaseConfig } from 'config/database.config';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => databaseConfig,
    }),
    UserModule,
    StudentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

