import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Response } from './common/response';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpFilter } from './common/filter';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 全局拦截器
  app.useGlobalInterceptors(new Response());
  // 异常过滤器
  app.useGlobalFilters(new HttpFilter());
  // 全局管道
  app.useGlobalPipes(new ValidationPipe());

  // swagger
  const config = new DocumentBuilder()
    .setTitle('后台管理系统')
    .setDescription('The API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);

  await app.listen(3333);
}
bootstrap();
