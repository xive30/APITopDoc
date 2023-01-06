import { DataTypes, Model } from "sequelize";
import sequelize from "../../../Database/sequelize";

export class Holiday extends Model {
	id_holiday!: number;

	start_date: Date;

	end_date: Date;
	
	id_activity: number;
}

const concatRequiredMessage = (data: string) => {
	return `Le champ ${data} est requis`;
};

Holiday.init(
	{
		id_holiday: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		start_date: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			validate: {
				// notNull: { msg: concatRequiredMessage('Date de Début des Vacances') },
				notEmpty: { msg: concatRequiredMessage("Date de Début des Vacances") },
			},
		},
		end_date: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			validate: {
				// notNull: { msg: concatRequiredMessage('Date de fin des vacances') },
				notEmpty: { msg: concatRequiredMessage("Date de fin des vacances") },
			},
		},
	},
	{
		sequelize,
		modelName: "td_holiday",
		timestamps: false,
		freezeTableName: true,
	}
);
