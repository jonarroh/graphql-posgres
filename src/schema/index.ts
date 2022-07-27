import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { JONATHAN } from './Queries';

const RootQuery = new GraphQLObjectType({
	name: 'RootQuery',
	fields: {
		jonathan: JONATHAN
	}
});

export const schema = new GraphQLSchema({
	query: RootQuery
});
