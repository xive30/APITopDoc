import { IRepository } from "../core/respository.interface";
import { RoleDTO } from "../models/DTO/role.dto";
import { RoleMapper } from "../models/Mapper/role.mapper";
import { Role } from "../models/role.model";

export class RoleRepository implements IRepository<RoleDTO> {
	async findById(id: number): Promise<RoleDTO | null> {
		return Role.findByPk(id).then((role) => RoleMapper.MapToDTO(role));
	}

	async findAll(): Promise<Array<RoleDTO>> {
		return Role.findAll().then((data: Array<Role>) => {
			return data.map((role: Role) => {
				return RoleMapper.MapToDTO(role);
			});
		});
	}

	async create(role: Partial<RoleDTO>): Promise<RoleDTO> {
		return Role.create(role).then((data: Role) => {
			return RoleMapper.MapToDTO(data);
		});
	}

	async update(role: Role, id: number): Promise<boolean | number> {
		return Role.update(role, { where: { id_role: id } }).then(
			(data: Array<boolean | number>) => {
				return data[0];
			}
		);
	}

	async delete(id: number): Promise<boolean | number> {
		return Role.destroy({ where: { id_role: id } }).then(
			(data: boolean | number) => {
				return data;
			}
		);
	}
}
