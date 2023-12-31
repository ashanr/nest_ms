import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as dotenv from 'dotenv';


// dotenv.config();

dotenv.config({ path: './.env' });

console.log("MONGODB_URI: NEW", process.env['MONGODB_URI']);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Coordinates API')
    .setDescription('The coordinates API description')
    .setVersion('1.0')
    .addTag('coordinates')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();