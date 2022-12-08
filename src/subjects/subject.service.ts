import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Subject, SubjectBody } from './subject.model'

interface QueryParams {
	skip: number | undefined
	take: number | undefined
}

@Injectable()
export class SubjectsService {
	constructor(
		@InjectRepository(Subject)
		private subjectModel: Repository<Subject>,
	) {}

	getSubjects({ take, skip }: QueryParams) {
		return this.subjectModel.find({ take, skip })
	}
	getSubjectsCount() {
		return this.subjectModel.count()
	}
	async addSubject({ name }: SubjectBody) {
		return this.subjectModel.save({ name })
	}
	async updateSubject(id: string, { name }: SubjectBody) {
		return this.subjectModel.update(id, { name })
	}
	async deleteSubject(id: string) {
		return await this.subjectModel.delete(id)
	}
}
