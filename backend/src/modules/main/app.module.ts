import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '../auth';
import { ConfigModule, ConfigService } from '../config';
import { UserModule } from '../user';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          type: configService.get('DB_TYPE'),
          host: configService.get('DB_HOST'),
          port: configService.get('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_DATABASE'),
          authSource: 'admin',
          entities: [__dirname + './../**/**.entity{.ts,.js}'],
          migrations: [__dirname + '../migrations/*{.ts,.js}'],
          synchronize: configService.get('DB_SYNC') === 'true',
        } as TypeOrmModuleAsyncOptions;
      },
    }),
    ConfigModule,
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
