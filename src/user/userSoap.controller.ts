import { Controller, Get, HttpException, HttpStatus, Param } from '@nestjs/common'
import { ResponseUserDTO } from 'src/controllers/dto/responseUser.dto'
import { UserSoapService } from './userSoap.service'

@Controller('user')
export class UserSoapController {
  constructor(private userService: UserSoapService) {}

  @Get(':userid')
  async getUserById(@Param('userid') userId: number): Promise<ResponseUserDTO | HttpException>{
    try{
    const user: ResponseUserDTO =await this.userService.getUser(String(userId));
    return user
    }catch(error){
      console.log(error)
      return new HttpException("Something went wrong", HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  async getAllUsers(): Promise<ResponseUserDTO[] | HttpException>{
    try{
      const users: ResponseUserDTO[] = await this.userService.getAllUsers()
      return users
    }catch(error){
      console.log(error);
      return new HttpException("Something went wrong", HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
