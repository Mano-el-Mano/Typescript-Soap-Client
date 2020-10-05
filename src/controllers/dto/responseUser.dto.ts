import { Exclude } from 'class-transformer'

import { LocationDTO } from './location.dto'

export class ResponseUserDTO {
  id: number
  name: string
  images: string[]
  rating: number
  location: LocationDTO

  @Exclude()
  password: string

  constructor(partial: Partial<ResponseUserDTO>) {
    Object.assign(this, partial)
  }
}
