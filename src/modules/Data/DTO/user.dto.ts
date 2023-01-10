export interface UserDto {
	firstname: string;

	lastname: string;

	gender: string;

	birthday: string;

	email: string;

	phone: number;
}	

export interface UserLocationDto {
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

export interface UserAuthDto extends UserDto {
	id_td_user?: number;

	password: string;
}	
