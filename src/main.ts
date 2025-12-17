import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API E-commerce Farmácia')
    .setDescription(
      'Documentação da API para gerenciamento de categorias de uma farmácia',
    )
    .setVersion('1.0')
    .addTag('Categoria')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(4002);
}

bootstrap();
