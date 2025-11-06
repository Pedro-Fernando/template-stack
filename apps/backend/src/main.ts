import 'reflect-metadata';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const porta = process.env.PORT ?? 3000;
  const app = await NestFactory.create(AppModule);
  await app.listen(porta);

  console.log(`🚀 Servidor rodando em http://localhost:${porta}`);
}

void bootstrap();
