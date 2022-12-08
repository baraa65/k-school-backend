import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Subject } from './subject.model'
import { SubjectsController } from './subjects.controller'
import { SubjectsService } from './subject.service'

@Module({
	imports: [TypeOrmModule.forFeature([Subject])],
	controllers: [SubjectsController],
	providers: [SubjectsService],
})
export class SubjectsModule {}
