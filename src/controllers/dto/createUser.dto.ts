import { IsNotEmpty } from 'class-validator'

export class CreateUserDTO {
  @IsNotEmpty()
  name: string

  images: string[]
  @IsNotEmpty()
  password: string

  constructor(partial: Partial<CreateUserDTO>) {
    Object.assign(this, partial)
  }
}
