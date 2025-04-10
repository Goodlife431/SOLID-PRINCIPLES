import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {
  @ApiTags('Health')
  @ApiOkResponse({
    description: 'Service Health',
  })
  @Get('health')
  public getHealth(@Res() res: Response) {
    ResponseFormat.okResponse(res, 'Health OK From Student service');
  }
}
