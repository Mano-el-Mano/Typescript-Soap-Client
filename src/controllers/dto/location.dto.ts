export class LocationDTO {
  lattitude: number
  longtitude: number
  timestamp: Date

  constructor(partial: Partial<LocationDTO>) {
    Object.assign(this, partial)
  }
}
