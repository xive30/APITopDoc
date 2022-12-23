import { DataTypes, Model } from "sequelize";
import sequelize from "../../sequelize";

export class Role extends Model {
	id_role!: number;

	name_role: string;
}

Role.init(
	{
		id_role: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		name_role: {
			type: DataTypes.STRING,
		},

	},
	{
		sequelize,
		modelName: "td_role",
		timestamps: false,
		freezeTableName: true,
	}
);
