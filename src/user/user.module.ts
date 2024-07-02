import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cartdata } from 'src/entities/CartData';
import { UserLogin } from 'src/entities/UserLogin';
import { UserInfo } from 'src/entities/UserInfo';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { DBSequenceService } from 'src/dbService.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserLogin, UserInfo, Cartdata])],
  controllers: [UserController],
  providers: [UserService, DBSequenceService],
})
export class UserModule {}
