import { DataTypes, Model } from "sequelize";
import sequelize from "../../sequelize";

export class Appointment extends Model {
    id_activity: number;

    id_td_user: number;

    date_appointment: Date;

    duration: number;
}

const concatRequiredMessage = (data: string) => {
	return `Le champ ${data} est requis`;
};

Appointment.init(
    {
        id_activity: {
            type: DataTypes.INTEGER,
			primaryKey: true,
        },
        id_td_user: {
            type: DataTypes.INTEGER,
			primaryKey: true,
        },
        date_appointment: {
            type: DataTypes.DATE,
            primaryKey: true,
            allowNull: false,
			validate: {
				// notNull: { msg: concatRequiredMessage('Date de Rendez-vous') },
				notEmpty: { msg: concatRequiredMessage("Date de Rendez-vous") },
			},
        },
        duration: {
            type: DataTypes.INTEGER,
        },
    },
    {
		sequelize,
		modelName: "td_appointement",
		timestamps: false,
		freezeTableName: true,
    }
)