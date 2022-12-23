import { DataTypes, Model } from "sequelize";
import sequelize from "../../sequelize";

export class User extends Model {
	id_td_user!: number;

	firstname!: string;

	lastname!: string;

	gender!: string;

	birthday!: string;

	email!: string;

	password!: string;

	phone!: number;
    static id_td_user: any;
}

const concatRequiredMessage = (data: string) => {
	return `Le champ ${data} est requis`;
};

User.init(
	{
		id_td_user: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		firstname: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				// notNull: { msg: concatRequiredMessage('Prénom') },
				notEmpty: { msg: concatRequiredMessage("Prénom") },
			},
		},
		lastname: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				// notNull: { msg: concatRequiredMessage('Nom') },
				notEmpty: { msg: concatRequiredMessage("Nom") },
			},
		},
		gender: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: { msg: concatRequiredMessage("gender") },
			},
		},
		birthday: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				// notNull: { msg: concatRequiredMessage('Date de naissance') },
				notEmpty: { msg: concatRequiredMessage("Date de naissance") },
			},
		},
		phone: {
			type: DataTypes.STRING,
			allowNull: true,
			validate: {
				// is: /^$|^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/g,
			},
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				// notNull: { msg: concatRequiredMessage('email') },
				notEmpty: { msg: concatRequiredMessage("email") },
			},
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				// notNull: { msg: concatRequiredMessage('Mot de passe') },
				notEmpty: { msg: concatRequiredMessage("Mot de passe") },
			},
		},
	},
	{
		sequelize,
		modelName: "td_user",
		timestamps: false,
		freezeTableName: true,
		defaultScope: {
			attributes: { exclude: ["password"] },
		},
		scopes: {
			withPassword: {
				attributes: { include: ["password"] },
			},
		},
	}
);
