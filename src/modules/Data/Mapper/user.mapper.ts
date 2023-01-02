import { UserDTO, UserLocationDTO } from "../DTO/user.dto";
import { User } from "../Models/user.model";

export class UserMapper {
	static MapToDTO(user: User | null): UserDTO {
		if (user === null) return null as any;

		const DTO: UserDTO = {
			firstname: user.firstname,
			lastname: user.lastname,
			gender: user.gender,
			birthday: user.birthday,
			email: user.email,
			phone: user.phone,
		};
		return DTO;
	}

	static MapToFullUserDTO(user: User | null): UserLocationDTO {
		if (user === null) return null as any;

		const DTO: UserLocationDTO = {
			firstname: user.firstname,
			lastname: user.lastname,
			gender: user.gender,
			birthday: user.birthday,
			email: user.email,
			phone: user.phone,
			id_location: user.id_location,
			address: user.get({plain: true}).td_location.address,
			zip_code: user.get({plain: true}).td_location.zip_code,
			city: user.get({plain: true}).td_location.city,
		};
		return DTO;
	}
}
