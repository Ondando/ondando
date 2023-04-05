import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = 3001;
  try {
    const app = await NestFactory.create(AppModule);
    /*
    app.enableCors({
      origin: 'http://localhost:${PORT}',
      methods: 'GET,HEAD,PUT,POST,PATH,DELETE',
    });
    */
    await app.listen(PORT);
    console.log(`Server is running on: http://localhost:${PORT}`);
  } catch (err) {
    console.error(err);
  }
}

bootstrap();
