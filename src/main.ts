import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //open api to all
  app.enableCors();
  //add api prefix
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
