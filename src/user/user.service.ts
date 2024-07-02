import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DBSequenceService } from 'src/dbService.service';
import { UserInfo } from 'src/entities/UserInfo';
import { UserLogin } from 'src/entities/UserLogin';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserLogin)
    private userLoginRepository: Repository<typeof UserLogin>,
    @InjectRepository(UserInfo)
    private userInfoRepository: Repository<typeof UserInfo>,
    private readonly dbSequenceService: DBSequenceService,
  ) {}

  async findAllUsers() {
    let response = {};
    try {
      let users = await this.userLoginRepository.find({
        select: { EMAIL: true, USERID: true } as unknown,
      });

      response = {
        status: 'SUCCESS',
        message: 'Successfully fetched users',
        httpStatus: HttpStatus.OK,
        data: users,
      };
      return response;
    } catch (error) {
      console.log(error);
      response = {
        status: 'FAILIURE',
        message: 'Exception occurred while fetching users',
        httpStatus: HttpStatus.BAD_REQUEST,
        data: [],
      };
      return error;
    }
  }
}
