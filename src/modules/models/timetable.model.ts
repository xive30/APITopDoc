import { DataTypes, Model } from "sequelize";
import sequelize from "../../sequelize";

export class Timetable extends Model {
	id_timetable!: number;

	td_day: string;

    timetable_start: Date;
    
    timetable_end: Date;

	duration: number;
}

const concatRequiredMessage = (data: string) => {
	return `Le champ ${data} est requis`;
};

Timetable.init(
	{
		id_timetable: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		td_day: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				// notNull: { msg: concatRequiredMessage('Jour') },
				notEmpty: { msg: concatRequiredMessage("Jour") },
			},
		},
		timetable_start: {
            type: DataTypes.DATEONLY,
			allowNull: false,
			validate: {
                // notNull: { msg: concatRequiredMessage('Horaire de fin') },
				notEmpty: { msg: concatRequiredMessage("Horaire de début") },
			},
		},
		timetable_end: {
            type: DataTypes.DATEONLY,
			allowNull: false,
			validate: {
                // notNull: { msg: concatRequiredMessage('Horaire de fin') },
				notEmpty: { msg: concatRequiredMessage("Horaire de début") },
			},
		},
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                // notNull: { msg: concatRequiredMessage('Jour') },
                notEmpty: { msg: concatRequiredMessage("Jour") },
            },
        },
	},
	{
		sequelize,
		modelName: "td_timetable",
		timestamps: false,
		freezeTableName: true,
	}
);
