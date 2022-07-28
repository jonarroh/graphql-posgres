import { GraphQLBoolean, GraphQLID, GraphQLString } from 'graphql';
import { Usuarios } from '../../entities/usuarios';
import { USUARIO_TYPE } from '../../types';
import { hash, compare } from 'bcryptjs';

export const CREATE_USER = {
	type: USUARIO_TYPE,
	args: {
		nombre: { type: GraphQLString },
		password: { type: GraphQLString },
		telefono: { type: GraphQLString }
	},
	async resolve(_: any, args: any) {
		const { nombre, password, telefono } = args;
		const encryptedPassword = await hash(password, 10);
		const result = await Usuarios.insert({
			nombre,
			password: encryptedPassword,
			telefono
		});
		console.log(result);
		return {
			id: result.identifiers[0].id,
			nombre,
			password: encryptedPassword,
			telefono
		};
	}
};

export const DELETE_USER = {
	type: GraphQLString,
	args: {
		id: { type: GraphQLID }
	},
	async resolve(_: any, args: any) {
		const { id } = args;
		const result = await Usuarios.delete({ id });
		console.log(result);
		return 'Se elimino el usuario';
	}
};

export const UPDATE_USER = {
	type: GraphQLBoolean,
	args: {
		id: { type: GraphQLID },
		nombre: { type: GraphQLString },
		oldpassword: { type: GraphQLString },
		newpassword: { type: GraphQLString },
		telefono: { type: GraphQLString }
	},
	async resolve(
		_: any,
		{ id, nombre, oldpassword, newpassword, telefono }: any
	) {
		const userFound = await Usuarios.findOneBy({ id });

		if (!userFound) return false;

		const encryptedPassword = await compare(
			oldpassword,
			userFound.password
		);

		newpassword = await hash(newpassword, 10);

		return true;
	}
};
