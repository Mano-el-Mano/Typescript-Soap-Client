import { Inject, Injectable } from '@nestjs/common'
import { LocationDTO } from '../controllers/dto/location.dto'
import { CreateUserDTO } from '../controllers/dto/createUser.dto'
import { SoapService } from '../soap.client'
import { ResponseUserDTO } from 'src/controllers/dto/responseUser.dto'
import { plainToClass } from 'class-transformer'

@Injectable()
export class UserSoapService {
  private soapClient
  constructor(@Inject('SOAP_CLIENT') soapClient: any) {
    this.soapClient = soapClient
  }


  async getUser(id: string): Promise<ResponseUserDTO> {
    return new Promise((resolve, reject) =>{
    this.soapClient.getUser({ userId: id }, async (err, res) => {
      if (err) reject(err);
      try{
      const parsedUser: ResponseUserDTO = plainToClass(ResponseUserDTO, JSON.parse(res.user));
      console.log(parsedUser)
      resolve(parsedUser)
      }catch(error){
        reject(error)
      }
    })
})
  }

  async getAllUsers(): Promise<ResponseUserDTO[]>{
    return new Promise((resolve, reject) =>{
      this.soapClient.getAllUsers({}, async (err, res) =>{
        if(err) reject(err)
        const userResponse: Partial<ResponseUserDTO>[] = JSON.parse(res.users)
        try{
          const parsedUsers: ResponseUserDTO[] = userResponse.map(user =>{
            return plainToClass(ResponseUserDTO, user)
          })
          resolve(parsedUsers)
        }catch(error){
          reject(error)
        }
      })
    })
  }


  createUser(userEntity: CreateUserDTO): string {
    //call database services middleware etc
    return `Created User ${JSON.stringify(userEntity)}`
  }
}
