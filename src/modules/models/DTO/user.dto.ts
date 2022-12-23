export interface UserDTO {
	firstname: string;

	lastname: string;

	gender: string;

	birthday: string;

	email: string;

	phone: number;
}

export interface UserIdDTO extends UserDTO {
	id_td_user: string;
}