import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Teacher, TeacherBody } from './teacher.model'

interface QueryParams {
	skip: number | undefined
	take: number | undefined
}

@Injectable()
export class TeachersService {
	constructor(
		@InjectRepository(Teacher)
		private teacherModel: Repository<Teacher>,
	) {}

	getTeachers({ take, skip }: QueryParams) {
		return this.teacherModel.find({ take, skip })
	}
	getTeachersCount() {
		return this.teacherModel.count()
	}
	async addTeacher({ name }: TeacherBody) {
		return this.teacherModel.save({ name })
	}
	async updateTeacher(id: string, { name }: TeacherBody) {
		return this.teacherModel.update(id, { name })
	}
	async deleteTeacher(id: string) {
		return await this.teacherModel.delete(id)
	}
}
