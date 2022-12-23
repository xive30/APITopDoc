import { RoleDTO } from "../DTO/role.dto";
import { Role } from "../role.model";

export class RoleMapper {
	static MapToDTO(role: Role | null): RoleDTO {
		if (role === null) return null as any;

		const DTO: RoleDTO = {
			name_role: role.name_role,
		};
		return DTO;
	}
}
