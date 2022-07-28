import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

export const USUARIO_TYPE = new GraphQLObjectType({
	name: 'Usuario',
	fields: {
		id: { type: GraphQLID },
		nombre: { type: GraphQLString },
		password: { type: GraphQLString },
		telefono: { type: GraphQLString }
	}
});
