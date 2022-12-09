import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export interface TeacherBody {
  name: string;
}

export const teacherCollection = (teacher: Teacher) => ({
  id: teacher.id,
  name: teacher.name,
});

@Entity()
export class Teacher {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}