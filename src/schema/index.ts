import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { JONATHAN } from './Queries';
import { CREATE_USER } from './Mutations';
import { USER } from '../types';
const RootQuery = new GraphQLObjectType({
	name: 'RootQuery',
	fields: {
		jonathan: JONATHAN
	}
});

const Mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		createUser: CREATE_USER
	}
});

export const schema = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutation
});
