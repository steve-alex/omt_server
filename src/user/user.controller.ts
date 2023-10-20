import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get(':id')
  getUser(@Param('id') id: number) {
    return this.userService.getUser(id);
  }

  @Post()
  createUser(@Body() createUserDTO: UserDTO) {
    return this.userService.createUser(createUserDTO);
  }

  @Put(':id')
  updateUser(@Param('id') id: number, @Body() updateUserDTO: UserDTO) {
    return this.userService.updateUser(id, updateUserDTO);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return this.userService.deleteUser(id);
  }
}
