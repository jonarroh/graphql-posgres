import { DataSource } from 'typeorm';
import { Usuarios } from './entities/usuarios';

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: 'root',
	password: 'root',
	database: 'root',
	synchronize: true,
	logging: true,
	entities: [Usuarios],
	migrations: []
});
