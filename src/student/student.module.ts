import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { databaseConfig } from 'config/database.config';
import { StudentSchema } from './student.schema';
import { UserSchema } from 'src/user/user.schema';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => databaseConfig,
    }),
    MongooseModule.forFeature(
      [{ name: 'student', schema: StudentSchema },
      { name: 'user', schema: UserSchema }]),
  ],
  providers: [StudentService],
  controllers: [StudentController]
})
export class StudentModule { }
