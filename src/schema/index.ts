import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import { CREATE_USER, DELETE_USER } from './Mutations';
import { GET_USERS, JONATHAN } from './Queries';
import { GET_USER } from './Queries/user';

const RootQuery = new GraphQLObjectType({
	name: 'RootQuery',
	fields: {
		jonathan: JONATHAN,
		getALLUsers: GET_USERS,
		getUser: GET_USER
	}
});

const Mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		createUser: CREATE_USER,
		deleteUser: DELETE_USER
	}
});

export const schema = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutation
});
