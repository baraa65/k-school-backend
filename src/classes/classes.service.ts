import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Class, ClassBody } from './class.model'

interface QueryParams {
	skip: number | undefined
	take: number | undefined
}

@Injectable()
export class ClassesService {
	constructor(
		@InjectRepository(Class)
		private clsModel: Repository<Class>,
	) {}

	getClasses({ take, skip }: QueryParams) {
		return this.clsModel.find({ take, skip })
	}
	getClassesCount() {
		return this.clsModel.count()
	}
	async addClass({ name }: ClassBody) {
		return this.clsModel.save({ name })
	}
	async updateClass(id: string, { name }: ClassBody) {
		return this.clsModel.update(id, { name })
	}
	async deleteClass(id: string) {
		return await this.clsModel.delete(id)
	}
}
