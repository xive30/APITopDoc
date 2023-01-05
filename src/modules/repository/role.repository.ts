import { InputError, NotFoundError } from "../core/errors/errors";
import { IRepository } from "../core/repository.interface";
import { RoleDTO } from "../Data/DTO/role.dto";
import { RoleMapper } from "../Data/Mapper/role.mapper";
import { Role } from "../Data/Models/role.model";

export class RoleRepository implements IRepository<RoleDTO> {
	/**
	 *
	 * @param id
	 * @returns
	 */
	async findById(id: number): Promise<RoleDTO | null> {
		const result = await Role.findByPk(id);
		if (result === null) throw new NotFoundError("Role not found");
		return RoleMapper.MapToDTO(result);
	}

	/**
	 *
	 * @param filter
	 * @returns
	 */
	async findAll(filter: any): Promise<Array<RoleDTO>> {
		return Role.findAll({
			where: filter,
		}).then((data: Array<Role>) => {
			return data.map((role: Role) => {
				return RoleMapper.MapToDTO(role);
			});
		});
	}

	/**
	 *
	 * @param role
	 */
	async create(role: Partial<RoleDTO>): Promise<RoleDTO> {
		return Role.create(role).then((data: Role) => {
			return RoleMapper.MapToDTO(data);
		});
	}

	/**
	 *
	 * @param role
	 */
	async update(role: Role, id: number ): Promise<boolean | number> {
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
