import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../service/user.service';

@Controller('/user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get("/login")
    login(): string {
        return "login";
    }
}
