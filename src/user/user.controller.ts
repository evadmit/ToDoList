import { Controller, UseGuards, Get, Post, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserDto } from './models/user.dto';
import {UserService} from './user.service';
import {User} from './interfaces/user.interface';

@Controller('user')
export class UserController {

    constructor(private readonly userService:UserService) {}

    @Get('login')
    @UseGuards(AuthGuard())
    async findUser(): Promise<User[]>{
        return this.userService.findAll();
    }

    @Post()
    async create(@Body() userDto: UserDto){
        this.userService.create(userDto);
    }
}
