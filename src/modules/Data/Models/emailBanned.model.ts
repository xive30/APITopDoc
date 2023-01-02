import { DataTypes, Model } from "sequelize";
import sequelize from "../../../Database/sequelize";

export class EmailBanned extends Model {
	id_email_banned!: number;

	email: string;

	reason: string;

	banned_date: string;
}

const concatRequiredMessage = (data: string) => {
	return `Le champ ${data} est requis`;
};

EmailBanned.init(
	{
		id_email_banned: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				// notNull: { msg: concatRequiredMessage('Email Banni') },
				notEmpty: { msg: concatRequiredMessage("Email Banni") },
			},
		},
		reason: {
			type: DataTypes.STRING,
		},
		banned_date: {
			type: DataTypes.DATE,
		},
	},
	{
		sequelize,
		modelName: "td_email_banned",
		timestamps: false,
		freezeTableName: true,
	}
);
