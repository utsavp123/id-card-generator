import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(@InjectModel('users') private readonly userModel: Model<User>) { }

    async getAllUsers(): Promise<User[]> {
        return this.userModel.find().exec();
    }
    async createUser(userDto: User): Promise<User> {
        const { username, password } = userDto;
        const existingUser = await this.userModel.findOne({ username }).exec();
        if (existingUser) {
            throw new ConflictException('User already exists');
        }
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = new this.userModel({
            username,
            password: hashedPassword,
        });
        return newUser.save();
    }
    async login(username: string, password: string): Promise<User> {
        const user = await this.userModel.findOne({ username }).exec();
    
        if (!user) {
          throw new UnauthorizedException('Invalid username or password');
        }
    
        const isPasswordValid = await bcrypt.compare(password, user.password);
    
        if (!isPasswordValid) {
          throw new UnauthorizedException('Invalid username or password');
        }
    
        return user;
      }
}
