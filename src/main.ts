import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  // TODO: Show log based on env
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  // Enable validation against input
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT, () => {
    logger.log(
      `Running in ${config.get('environment')} environment on port ${config.get(
        'port',
      )}`,
    );
  });
}
bootstrap();
