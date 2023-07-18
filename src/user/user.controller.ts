import { Get, Controller, Post, Body, ConflictException } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.schema';
import { ApiResponse } from 'src/common/model/common.model';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Get("getAllUsers")
    async getAllUsers(): Promise<ApiResponse<User[]>> {
        const user = await this.userService.getAllUsers();
        return new ApiResponse<User[]>("success", user, 200);
    }
    @Post("createUser")
    async createUser(@Body() userDto: User): Promise<ApiResponse<User>> {
        try {
            const user = await this.userService.createUser(userDto);
            return new ApiResponse<User>("success", user, 200);

        } catch (error) {
            if (error instanceof ConflictException) {
                throw new ConflictException('User already exists');
            }
            throw error;
        }
    }
    @Post('login')
    async login(@Body() loginDto: User): Promise<ApiResponse<User>> {
        const { username, password } = loginDto;
        const user = await this.userService.login(username, password);
        return new ApiResponse<User>("success", user, 200);
    }
}

