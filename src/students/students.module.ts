import { Module } from '@nestjs/common'
import { StudentsService } from './students.service'
import { StudentsController } from './students.controller'
import { Student } from './student.model'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
	imports: [TypeOrmModule.forFeature([Student])],
	controllers: [StudentsController],
	providers: [StudentsService],
})
export class StudentsModule {}
