import { Activity } from "~/modules/Data/Models/activity.model";
import { Appointment } from "~/modules/Data/Models/appointement.model";
import { Holiday } from "~/modules/Data/Models/holiday.model";
import { Location } from "~/modules/Data/Models/location.model";
import { Patient } from "~/modules/Data/Models/patient.model";
import { Planning } from "~/modules/Data/Models/planning.model";
import { Role } from "~/modules/Data/Models/role.model";
import { ScheduleAdmin } from "~/modules/Data/Models/scheduleAdmin.model";
import { Timetable } from "~/modules/Data/Models/timetable.model";
import { User } from "~/modules/Data/Models/user.model";

export const relations = () => {
	User.hasOne(Patient, {
		foreignKey: "id_td_user",
		onDelete: "cascade",
		hooks: true,
	});
	Patient.belongsTo(User, {
		foreignKey: "id_td_user",
		onDelete: "cascade",
		hooks: true,
	});

	Location.hasMany(User, {
		foreignKey: "id_location",
		onDelete: "cascade",
		hooks: true,
	});
	User.belongsTo(Location, {
		foreignKey: "id_location",
		onDelete: "cascade",
		hooks: true,
	});

	User.hasOne(ScheduleAdmin, {
		foreignKey: "id_td_user",
		onDelete: "cascade",
		hooks: true,
	});
	ScheduleAdmin.belongsTo(User, {
		foreignKey: "id_td_user",
		onDelete: "cascade",
		hooks: true,
	});

	Activity.hasMany(ScheduleAdmin, {
		foreignKey: "id_activity",
		onDelete: "cascade",
		hooks: true,
	});
	ScheduleAdmin.belongsTo(Activity, {
		foreignKey: "id_activity",
		onDelete: "cascade",
		hooks: true,
	});

	Location.hasMany(Activity, {
		foreignKey: "id_location",
		onDelete: "cascade",
		hooks: true,
	});
	Activity.belongsTo(Location, {
		foreignKey: "id_location",
		onDelete: "cascade",
		hooks: true,
	});

	Activity.hasMany(Holiday, {
		foreignKey: "id_activity",
		onDelete: "cascade",
		hooks: true,
	});
	Holiday.belongsTo(Activity, {
		foreignKey: "id_activity",
		onDelete: "cascade",
		hooks: true,
	});

	Activity.hasOne(Planning, {
		foreignKey: "id_activity",
		onDelete: "cascade",
		hooks: true,
	});
	Planning.belongsTo(Activity, {
		foreignKey: "id_activity",
		onDelete: "cascade",
		hooks: true,
	});

	Planning.hasMany(Timetable, {
		foreignKey: "id_planning",
		onDelete: "cascade",
		hooks: true,
	});
	Timetable.belongsTo(Planning, {
		foreignKey: "id_planning",
		onDelete: "cascade",
		hooks: true,
	});

	Activity.hasMany(Appointment, {
		foreignKey: "id_activity",
		onDelete: "cascade",
		hooks: true,
	});
	Appointment.belongsTo(Activity, {
		foreignKey: "id_activity",
		onDelete: "cascade",
		hooks: true,
	});

	Patient.hasMany(Appointment, {
		foreignKey: "id_td_user",
		onDelete: "cascade",
		hooks: true,
	});
	Appointment.belongsTo(Patient, {
		foreignKey: "id_td_user",
		onDelete: "cascade",
		hooks: true,
	});

	User.hasMany(Role, { onDelete: "cascade", hooks: true });
	Role.belongsToMany(User, {
		through: "td_Possess",
		onDelete: "cascade",
		hooks: true,
	});
};
