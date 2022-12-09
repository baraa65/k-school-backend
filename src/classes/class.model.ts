import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export interface ClassBody {
  name: string;
}

export const clsCollection = (cls: Class) => ({
  id: cls.id,
  name: cls.name,
});

@Entity()
export class Class {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}