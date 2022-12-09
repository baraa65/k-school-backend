import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common'
import { clsCollection } from './class.model'
import { ClassesService } from './classes.service'

@Controller('class')
export class ClassesController {
	constructor(private readonly classesService: ClassesService) {}

	@Get()
	async getClasses(@Query('skip') skip: number, @Query('take') take: number) {
		const classes = await this.classesService.getClasses({ skip, take })
		const total = await this.classesService.getClassesCount()
		return { data: classes.map((s) => clsCollection(s)), total }
	}

	@Post()
	async addClass(@Body('name') name: string) {
		const cls = await this.classesService.addClass({ name })
		return clsCollection(cls)
	}

	@Patch(':id')
	async updateClass(@Param('id') id: string, @Body('name') name: string) {
		const cls = await this.classesService.updateClass(id, { name })
		return cls
	}

	@Delete(':id')
	async deleteClass(@Param('id') id: string) {
		await this.classesService.deleteClass(id)

		return 'Success'
	}
}
