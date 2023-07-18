import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoose from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  const connection = mongoose.connection;
  connection.on('connected', () => {
    console.log('Connected to the database');
  });
  connection.on('error', (err) => {
    console.error(`Database connection error: ${err}`);
  });
}
bootstrap();
