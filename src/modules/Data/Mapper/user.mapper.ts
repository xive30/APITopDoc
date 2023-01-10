import { UserAuthDto, UserDto, UserLocationDto } from "../Dto/user.Dto";
import { User } from "../Models/user.model";

export class UserMapper {
	static MapToDto(user: User | null): UserDto {
		if (user === null) return null as any;

		const Dto: UserDto = {
			firstname: user.firstname,
			lastname: user.lastname,
			gender: user.gender,
			birthday: user.birthday,
			email: user.email,
			phone: user.phone,
		};
		return Dto;
	}

	static MapAuthToDto(user: User | null): UserAuthDto {
		if (user === null) return null as any;

		const Dto: UserAuthDto = {
			id_td_user: user.id_td_user,
			firstname: user.firstname,
			lastname: user.lastname,
			gender: user.gender,
			birthday: user.birthday,
			email: user.email,
			password: user.password,
			phone: user.phone,
		};
		return Dto;
	}
	


	static MapToFullUserDto(user: User | null): UserLocationDto {
		if (user === null) return null as any;

		const Dto: UserLocationDto = {
			firstname: user.firstname,
			lastname: user.lastname,
			gender: user.gender,
			birthday: user.birthday,
			email: user.email,
			phone: user.phone,
			id_location: user.id_location,
			address: user.get({ plain: true }).td_location.address,
			zip_code: user.get({ plain: true }).td_location.zip_code,
			city: user.get({ plain: true }).td_location.city,
		};
		return Dto;
	}
}
