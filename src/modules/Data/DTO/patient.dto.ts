export interface PatientUserDTO {
	id_td_user?: number;

	firstname: string;

	lastname: string;

	gender: string;

	birthday: string;

	email: string;

	phone: number;

	secu_number_fr_fr: string;
}

export interface PatientDTO {
	id_td_user?: number;

	secu_number_fr_fr: string;
}

export interface PatientFilterDTO {
	secu_number_fr_fr: string;
}
