import { Injectable } from '@nestjs/common'
import { ResponseUserDTO } from 'src/controllers/dto/responseUser.dto'
import { LocationDTO } from '../controllers/dto/location.dto'
import { CreateUserDTO } from 'src/controllers/dto/createUser.dto'

@Injectable()
export class UserService {
  getUser(): ResponseUserDTO {
    const userLocation: LocationDTO = new LocationDTO({
      lattitude: 123,
      longtitude: 123123,
      timestamp: new Date(Date.now()),
    })

    return new ResponseUserDTO({
      id: 1,
      name: 'kris',
      images: ['aws bucket id1', 'aws bucket id2'],
      location: userLocation,
      password: 'hello 123',
      rating: 7.5,
    })
  }

  createUser(userEntity: CreateUserDTO): string {
    //call database services middleware etc
    return `Created User ${JSON.stringify(userEntity)}`
  }
}
