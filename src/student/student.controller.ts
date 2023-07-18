import { Body, Controller, Post, Res } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.schema';

@Controller('students')
export class StudentController {
    constructor(private readonly studentService: StudentService) { }

    @Post('createStudent')
    async createStudent(@Body() studentDto: Student, @Res() res): Promise<void> {
        try {
            const newStudent = await this.studentService.createStudent(studentDto);
            res.status(201).send(newStudent);
        } catch (error) {
            res.status(500).send('An error occurred while creating the student.');
        }
    }
}

