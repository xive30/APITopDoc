export interface ScheduleAdminUserDto {
	id_td_user?: number;

	firstname: string;

	lastname: string;

	gender: string;

	birthday: string;

	email: string;

	phone: number;

	practitioner: boolean;
}

export interface ScheduleAdminDto {
	id_td_user?: number;

	practitioner: boolean;
}

export interface ScheduleAdminFilterDto {
	practitioner: boolean;
}
