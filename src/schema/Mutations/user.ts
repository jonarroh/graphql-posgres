import { GraphQLString } from 'graphql';
import { USER } from '../../types';
import { Usuarios } from '../../entities/usuarios';

export const CREATE_USER = {
	type: GraphQLString,
	args: {
		nombre: { type: GraphQLString },
		password: { type: GraphQLString },
		telefono: { type: GraphQLString }
	},
	async resolve(_: any, args: any) {
		const { nombre, password, telefono } = args;
		const result = await Usuarios.insert({
			nombre,
			password,
			telefono
		});
		console.log(result);
		return 'user created';
	}
};
