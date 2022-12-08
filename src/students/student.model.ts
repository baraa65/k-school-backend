import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export interface StudentBody {
  name: string;
}

export const studentCollection = (student: Student) => ({
  id: student.id,
  name: student.name,
});

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}