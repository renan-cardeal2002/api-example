import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './resources/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './gards/auth/auth.module';
import { TimeRequestMiddleware } from './middlewares/time-request/time-request.middleware';
import { AuthGuard } from './gards/auth/auth.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/app-financas'),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TimeRequestMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
