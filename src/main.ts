import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigurationType } from './config/configuration';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  // TODO: Show log based on env
  const app = await NestFactory.create(AppModule);
  const config: ConfigService<AppConfigurationType> = app.get(ConfigService);
  // Enable validation against input
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(config.get('port'), () => {
    logger.log(
      `Running in ${config.get('environment')} environment on port ${config.get(
        'port',
      )}`,
    );
  });
}
bootstrap();
