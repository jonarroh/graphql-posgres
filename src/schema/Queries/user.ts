import { GraphQLID, GraphQLList } from 'graphql';
import { Usuarios } from '../../entities/usuarios';
import { USUARIO_TYPE } from '../../types';

export const GET_USERS = {
	type: GraphQLList(USUARIO_TYPE),
	async resolve() {
		const result = await Usuarios.find();
		// console.log(result);
		return result;
	}
};

export const GET_USER = {
	type: USUARIO_TYPE,
	args: {
		id: { type: GraphQLID }
	},
	async resolve(_: any, args: any) {
		const { id } = args;
		return await Usuarios.findOneBy({ id });
	}
};
