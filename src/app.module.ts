import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configValidationSchema } from './config.schema';
import { ProductModule } from './product/product.module';
import { SellerModule } from './seller/seller.module';
import { UsersModule } from './users/users.module';
import { CollectionPointModule } from './collection-point/collection-point.module';
import { DistributionSessionModule } from './distribution-session/distribution-session.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`stage.${process.env.STAGE}.env`],
      validationSchema: configValidationSchema,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          type: 'postgres',
          host: configService.get('DB_HOST'),
          port: configService.get('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_DATABASE'),
          autoLoadEntities: true,
          synchronize: true,
        };
      },
    }),
    ProductModule,
    SellerModule,
    UsersModule,
    CollectionPointModule,
    DistributionSessionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
