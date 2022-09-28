import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './users/entities/user.entity';
import { Color } from './colors/color.entity';

import { UsersModule } from './users/users.module'
import { ColorsModule } from './colors/color.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'db',
      entities: [User, Color],
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    ColorsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
