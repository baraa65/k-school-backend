import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common'
import { TeachersService } from './teachers.service'
import { teacherCollection } from './teacher.model'

@Controller('teacher')
export class TeachersController {
	constructor(private readonly teachersService: TeachersService) {}

	@Get()
	async getTeachers(@Query('skip') skip: number, @Query('take') take: number) {
		const teachers = await this.teachersService.getTeachers({ skip, take })
		const total = await this.teachersService.getTeachersCount()
		return { data: teachers.map((s) => teacherCollection(s)), total }
	}

	@Post()
	async addTeacher(@Body('name') name: string) {
		const teacher = await this.teachersService.addTeacher({ name })
		return teacherCollection(teacher)
	}

	@Patch(':id')
	async updateTeacher(@Param('id') id: string, @Body('name') name: string) {
		const teacher = await this.teachersService.updateTeacher(id, { name })
		return teacher
	}

	@Delete(':id')
	async deleteTeacher(@Param('id') id: string) {
		await this.teachersService.deleteTeacher(id)

		return 'Success'
	}
}
