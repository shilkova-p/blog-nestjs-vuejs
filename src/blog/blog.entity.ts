import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class PostEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    body: string;

    @Column()
    author: string;

    @Column()
    date_posted: string;
}
