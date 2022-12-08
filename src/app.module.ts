import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Student } from './students/student.model';
import { StudentsModule } from './students/students.module';
import { SubjectsModule } from './subjects/subjects.module';

@Module({
  imports: [
    StudentsModule,
    SubjectsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'k-school',
      entities: [Student],
      synchronize: true,
      dropSchema: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
