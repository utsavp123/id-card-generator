import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student } from './student.schema';
import { Model } from 'mongoose';
import { User } from 'src/user/user.schema';

@Injectable()
export class StudentService {
    constructor(
        @InjectModel('student') private readonly studentModel: Model<Student>,
        @InjectModel('user') private readonly userModel: Model<User>
    ) { }

    async createStudent(studentDto: Student): Promise<Student> {
        const newStudent = new this.studentModel(studentDto);
        return newStudent.save();
    }
}

