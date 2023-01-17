export interface PatientUserDto {
	[x: string]: any;
	id_td_user?: number;

	firstname: string;

	lastname: string;

	gender: string;

	birthday: string;

	email: string;

	password?: string;

	phone: number;

	address: string;

	zip_code: string;

	city: string;

	secu_number_fr_fr: string;
}

export interface PatientDto {
	id_td_user?: number;

	secu_number_fr_fr: string;
}

export interface PatientFilterDto {
	secu_number_fr_fr: string;
}
