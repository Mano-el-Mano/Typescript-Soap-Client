import { Exclude } from 'class-transformer'

import { LocationDTO } from './location.dto'

export class ResponseUserDTO {
  id: number
  name: string
  email: string
  createdAt: Date
  updatedAt: Date

  @Exclude()
  password: string

  constructor(partial: Partial<ResponseUserDTO>) {
    Object.assign(this, partial)
  }


}
