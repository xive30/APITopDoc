import { InputError, NotFoundError } from "../core/errors/errors";
import { IRepository } from "../core/repository.interface";
import { RoleDto } from "../Data/Dto/role.Dto";
import { RoleMapper } from "../Data/Mapper/role.mapper";
import { Role } from "../Data/Models/role.model";

export class RoleRepository implements IRepository<RoleDto> {
	/**
	 *
	 * @param id
	 * @returns
	 */
	async findById(id: number): Promise<RoleDto | null> {
		const result = await Role.findByPk(id);
		if (result === null) throw new NotFoundError("Role not found");
		return RoleMapper.MapToDto(result);
	}

	/**
	 *
	 * @param filter
	 * @returns
	 */
	async findAll(filter: any): Promise<Array<RoleDto>> {
		return Role.findAll({
			where: filter,
		}).then((data: Array<Role>) => {
			return data.map((role: Role) => {
				return RoleMapper.MapToDto(role);
			});
		});
	}

	/**
	 *
	 * @param role
	 */
	async create(role: Partial<RoleDto>): Promise<RoleDto> {
		return Role.create(role).then((data: Role) => {
			return RoleMapper.MapToDto(data);
		});
	}

	/**
	 *
	 * @param role
	 */
	async update(role: Role, id: number): Promise<boolean | number> {
		return Role.update(role, { where: { id_role: id } }).then(
			(data: Array<boolean | number>) => {
				return data[0];
			}
		);
	}

	/**
	 *
	 * @param id
	 */
	async delete(id: number): Promise<boolean | number> {
		return Role.destroy({ where: { id_role: id } }).then(
			(data: boolean | number) => {
				return data;
			}
		);
	}
}
