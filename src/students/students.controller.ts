import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common'
import { StudentsService } from './students.service'
import { studentCollection } from './student.model'

@Controller('students')
export class StudentsController {
	constructor(private readonly studentsService: StudentsService) {}

	@Get()
	async getStudents(@Query('skip') skip: number, @Query('take') take: number) {
		const students = await this.studentsService.getStudents({ skip, take })
		const total = await this.studentsService.getStudentsCount()
		return { data: students.map((s) => studentCollection(s)), total }
	}

	@Post()
	async addStudent(@Body('name') name: string) {
		const student = await this.studentsService.addStudent({ name })
		return studentCollection(student)
	}

	@Patch(':id')
	async updateStudent(@Param('id') id: string, @Body('name') name: string) {
		const student = await this.studentsService.updateStudent(id, { name })
		return student
	}

	@Delete(':id')
	async deleteStudent(@Param('id') id: string) {
		await this.studentsService.deleteStudent(id)

		return 'Success'
	}
}
