// user.controller.ts
import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { IUser } from '../schema/user.schema';


@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.getUsers();
  }

  @Get(':id')
  findOne(@Param('id') id: string){
    return this.userService.getUser(id);
  }

  @Post()
  create(@Body() userData: Partial<IUser>) {
    return this.userService.createUser(userData);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.userService.deleteUser(id);
  }
}
