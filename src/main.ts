import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const config = new DocumentBuilder()
  .setTitle('TFG Api')
  .setDescription('API to manage my e-commerce')
  .setVersion('1.0')
  .build()

  const document = SwaggerModule.createDocument(app,config)
  SwaggerModule.setup('api', app, document)

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
