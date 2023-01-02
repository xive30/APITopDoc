import { DataTypes, Model } from "sequelize";
import sequelize from "../../../Database/sequelize";

export class ScheduleAdmin extends Model {
	id_td_user!: number;

	secu_number_fr_fr: string;
	practitioner: boolean;
}

ScheduleAdmin.init(
	{
		id_td_user: {
			type: DataTypes.INTEGER,
			primaryKey: true,
		},
		practitioner: {
			type: DataTypes.BOOLEAN,
		},
	},
	{
		sequelize,
		modelName: "td_schedule_admin",
		timestamps: false,
		freezeTableName: true,
	}
);
