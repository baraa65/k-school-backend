import { Module } from '@nestjs/common'
import { TeachersService } from './teachers.service'
import { TeachersController } from './teachers.controller'
import { Teacher } from './teacher.model'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
	imports: [TypeOrmModule.forFeature([Teacher])],
	controllers: [TeachersController],
	providers: [TeachersService],
})
export class TeachersModule {}
