import { DataTypes, Model } from "sequelize";
import sequelize from "../../sequelize";

export class Patient extends Model {
	id_td_user!: number;

	secu_number_fr_fr: string;
}

const concatRequiredMessage = (data: string) => {
	return `Le champ ${data} est requis`;
};

Patient.init(
	{
		id_td_user: {
			type: DataTypes.INTEGER,
			primaryKey: true,
		},
		secu_number_fr_fr: {
			type: DataTypes.STRING,
		},
	},
	{
		sequelize,
		modelName: "td_patient",
		timestamps: false,
		freezeTableName: true,
	}
);
