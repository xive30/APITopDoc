export interface UserDTO {
	firstname: string;

	lastname: string;

	gender: string;

	birthday: string;

	email: string;

	phone: number;
}

export interface UserLocationDTO {
	firstname: string;

	lastname: string;

	gender: string;

	birthday: string;

	email: string;

	phone: number;

	id_location: number;

	address: string;

	zip_code: string;

	city: string;
}

export interface UserIdDTO extends UserDTO {
	id_td_user?: string;
}
