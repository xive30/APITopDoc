import { InputError, NotFoundError } from "../core/errors/errors";
import { IRepository } from "../core/respository.interface";
import { RoleDTO } from "../models/DTO/role.dto";
import { RoleMapper } from "../models/Mapper/role.mapper";
import { Role } from "../models/Models/role.model";

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
			where: filter
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
	async update(role: Role): Promise<RoleDTO> {
		if (role.id_role === null) throw new InputError("No id for role");
    
		const row = await Role.findByPk(role.id_role);

		if (row === null) throw new NotFoundError("role not found");

		const result = await row.save()
		return RoleMapper.MapToDTO(result) ;
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
