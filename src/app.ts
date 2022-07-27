import 'reflect-metadata';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import dotenv from 'dotenv';
import { schema } from './schema';
console.clear();
dotenv.config();

const app = express();

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true
	})
);

export default app;
