import {
	Entity,
	BaseEntity,
	PrimaryGeneratedColumn,
	Column
} from 'typeorm';

@Entity()
export class Usuarios extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;
	@Column()
	nombre: string;
	@Column()
	password: string;
	@Column()
	telefono: string;
}
