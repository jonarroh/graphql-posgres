import { GraphQLString } from 'graphql';
export { GET_USERS } from './user';

export const JONATHAN = {
	type: GraphQLString,
	resolve: () => 'uriel'
};
