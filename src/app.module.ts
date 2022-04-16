import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 1648,
      username: 'postgres',
      password: 'password',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
    PostModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
