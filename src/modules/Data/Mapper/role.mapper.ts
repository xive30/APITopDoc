import { RoleDto } from "../Dto/role.Dto";
import { Role } from "../Models/role.model";

export class RoleMapper {
	static MapToDto(role: Role | null): RoleDto {
		if (role === null) return null as any;

		const Dto: RoleDto = {
			name_role: role.name_role,
		};
		return Dto;
	}
}
