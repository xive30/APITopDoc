import { UserDTO } from "../DTO/user.dto";
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
}
