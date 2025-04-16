import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'path';
import * as fileUpload from 'express-fileupload';
var port=1258
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(fileUpload());
  

  app.setViewEngine('ejs');
  app.setBaseViewsDir(path.join(__dirname, '..', 'views'));

  await app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
}
bootstrap();
