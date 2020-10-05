import { Controller, Get, Param } from '@nestjs/common'
import { ResponseUserDTO } from 'src/controllers/dto/responseUser.dto'
import { UserSoapService } from './userSoap.service'

@Controller('user')
export class UserSoapController {
  constructor(private userService: UserSoapService) {}

  @Get(':userid')
  async getUserById(@Param('userid') userId: number) {
    const user: ResponseUserDTO = this.userService.getUser(String(userId))
    return user
  }
}
