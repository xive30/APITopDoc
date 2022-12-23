import { DataTypes, Model } from "sequelize";
import sequelize from "../../sequelize";

export class Location extends Model {
    id_location!: number;

    address!: string;

    zip_code!: string;

    city!: string;
}

const concatRequiredMessage = (data: string) => {
	return `Le champ ${data} est requis`;
};

Location.init(
	{
		id_location: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
        address: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				// notNull: { msg: concatRequiredMessage('Adresse') },
				notEmpty: { msg: concatRequiredMessage("Adresse") },
			},
		},
        zip_code: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				// notNull: { msg: concatRequiredMessage('ode Postal') },
				notEmpty: { msg: concatRequiredMessage("Code Postal") },
			},
		},
        city: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				// notNull: { msg: concatRequiredMessage('Ville') },
				notEmpty: { msg: concatRequiredMessage("Ville") },
			},
		},
    },
	{
		sequelize,
		modelName: "td_location",
		timestamps: false,
		freezeTableName: true,
	}
);