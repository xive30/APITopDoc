import { UserDTO } from "./user.dto";
import { User } from "./user.model";

export class UserMapper {
	static MapToDTO(user: User | null): UserDTO {
		if (user === null) return null as any;
		const DTO: UserDTO = {
			firstname: user.firstname,
			lastname: user.lastname,
            gender: user.gender,
			birthday: user.birthday,
			email: user.email,
			genre: user.genre,
			phone: user.phone,
		};
		console.log("DTO user mapper", DTO);
		return DTO;
	}
}
