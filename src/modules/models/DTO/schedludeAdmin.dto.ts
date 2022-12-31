export interface ScheduleAdminUserDTO {
    id_td_user?: number;

    firstname: string;

	lastname: string;

	gender: string;

	birthday: string;

	email: string;

	phone: number;
    
    practitioner: boolean;
}

export interface ScheduleAdminDTO{
    id_td_user?: number;

    practitioner: boolean;
}

export interface ScheduleAdminFilterDTO {
    practitioner: boolean;
}