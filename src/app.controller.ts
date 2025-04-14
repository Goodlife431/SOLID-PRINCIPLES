import { Controller, Get, Res } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { ResponseFormat } from './shared/utils';

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
