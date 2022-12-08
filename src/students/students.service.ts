import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Student, StudentBody } from './student.model'

interface QueryParams {
	skip: number | undefined
	take: number | undefined
}

@Injectable()
export class StudentsService {
	constructor(
		@InjectRepository(Student)
		private studentModel: Repository<Student>,
	) {}

	getStudents({ take, skip }: QueryParams) {
		return this.studentModel.find({ take, skip })
	}
	getStudentsCount() {
		return this.studentModel.count()
	}
	async addStudent({ name }: StudentBody) {
		return this.studentModel.save({ name })
	}
	async updateStudent(id: string, { name }: StudentBody) {
		return this.studentModel.update(id, { name })
	}
	async deleteStudent(id: string) {
		return await this.studentModel.delete(id)
	}
}
