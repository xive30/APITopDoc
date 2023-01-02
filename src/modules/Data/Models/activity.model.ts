import { DataTypes, Model } from "sequelize";
import sequelize from "../../../Database/sequelize";

export class Activity extends Model {
	id_activity?: number;

	activity_type: string;

	description: string;

	activity_validation: boolean;
	static id_activity: number | undefined;
}

const concatRequiredMessage = (data: string) => {
	return `Le champ ${data} est requis`;
};

Activity.init(
	{
		id_activity: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		activity_type: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				// notNull: { msg: concatRequiredMessage('Type d'activité') },
				notEmpty: { msg: concatRequiredMessage("Type d'activité") },
			},
		},
		description: {
			type: DataTypes.STRING,
		},
		activity_validation: {
			type: DataTypes.BOOLEAN,
		},
	},
	{
		sequelize,
		modelName: "td_activity",
		timestamps: false,
		freezeTableName: true,
	}
);
