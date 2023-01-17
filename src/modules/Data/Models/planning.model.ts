import { DataTypes, Model } from "sequelize";
import sequelize from "../../../Database/sequelize";
import { TimetableDto } from "../Dto/timetable.Dto";

export class Planning extends Model {
	id_planning!: number;

	start_validity: Date;

	end_validity: Date;

    id_activity: Number;

    timetables: TimetableDto[] | undefined;
}

const concatRequiredMessage = (data: string) => {
	return `le champ ${data} est requis`;
};

Planning.init(
	{
		id_planning: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		start_validity: {
			type: DataTypes.DATEONLY,
		},
		end_validity: {
			type: DataTypes.DATEONLY,
		},
	},
	{
		sequelize,
		modelName: "td_planning",
		timestamps: false,
		freezeTableName: true,
	}
);
