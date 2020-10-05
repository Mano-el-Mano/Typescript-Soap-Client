import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

/*

//for creating soap server functionality
const http = require('http')

 function initializeSoapConsumer(port: number){
  const server = http.createServer(function(request,response) {
    response.end("404: Not Found: "+request.url);
  });

  server.listen(port, () => console.log(`Soap client listening on port ${port}`));

}
*/

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const config = app.get<ConfigService>(ConfigService)
  //initializeSoapConsumer(config.get('SOAP_PORT'))
  await app.listen(config.get('PORT'))
}
bootstrap()
