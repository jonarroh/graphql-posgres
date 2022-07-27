import app from './app';
import { AppDataSource } from './db';

async function main() {
	try {
		await AppDataSource.initialize();
		console.log('Database connected');
		app.listen(3000, () => {
			console.log('Server is running on port 3000');
		});
	} catch (err) {
		console.error(err);
	}
}

main();
