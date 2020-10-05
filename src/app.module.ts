import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserSoapController } from './user/userSoap.controller'
import { UserService } from './services/user.service'
import { UserSoapService } from './user/userSoap.service'
const soap = require('soap')
const soapUrl = 'http://localhost:8001/wscalc1?wsdl'

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, UserSoapController],
  providers: [
    AppService,
    UserSoapService,
    {
      provide: 'SOAP_CLIENT',
      useFactory: async () => {
        const soapClient = await soap.createClientAsync(soapUrl)
        return soapClient
      },
    },
  ],
})
export class AppModule {}
