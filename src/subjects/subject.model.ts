import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export interface SubjectBody {
  name: string;
}

export const subjectCollection = (subject: Subject) => ({
  id: subject.id,
  name: subject.name,
});

@Entity()
export class Subject {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}