import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    allowedHeaders: ['x-apollo-operation-name', 'apollo-require-preflight'],
    origin: [
      'https://graphql-seminar.onrender.com',
      'https://studio.apollographql.com',
    ],
    credentials: true,
  });
  await app.listen(3000);
}
bootstrap();
