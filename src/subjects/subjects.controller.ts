import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common'
import { subjectCollection } from './subject.model'
import { SubjectsService } from './subject.service'

@Controller('subject')
export class SubjectsController {
	constructor(private readonly subjectsService: SubjectsService) {}

	@Get()
	async getSubjects(@Query('skip') skip: number, @Query('take') take: number) {
		const students = await this.subjectsService.getSubjects({ skip, take })
		const total = await this.subjectsService.getSubjectsCount()
		return { data: students.map((s) => subjectCollection(s)), total }
	}

	@Post()
	async addSubject(@Body('name') name: string) {
		const subject = await this.subjectsService.addSubject({ name })
		return subjectCollection(subject)
	}

	@Patch(':id')
	async updateSubject(@Param('id') id: string, @Body('name') name: string) {
		const student = await this.subjectsService.updateSubject(id, { name })
		return student
	}

	@Delete(':id')
	async deleteSubject(@Param('id') id: string) {
		await this.subjectsService.deleteSubject(id)

		return 'Success'
	}
}
