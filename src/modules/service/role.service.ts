import { IRepository } from "../core/repository.interface";
import { IService } from "../core/service.interface";
import { RoleDto } from "../Data/Dto/role.Dto";
import { Role } from "../Data/Models/role.model";

export class RoleService implements IService<RoleDto> {
	private roleRepository: IRepository<RoleDto>;

	constructor(roleRepository: IRepository<RoleDto>) {
		this.roleRepository = roleRepository;
	}

	/**
	 *
	 * @param options
	 * @returns
	 */
	async findAll(options?: any): Promise<Array<RoleDto> | null> {
		return this.roleRepository.findAll(options).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param id
	 * @returns
	 */
	async findById(id_role: number): Promise<RoleDto | null> {
		return this.roleRepository.findById(id_role).then((data) => {
			console.log(data);
			return data;
		});
	}

	/**
	 *
	 * @param t
	 * @returns
	 */
	async create(role: Role): Promise<RoleDto | null> {
		return this.roleRepository.create(role).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param t
	 * @returns
	 */
	async update(role: Role, id_role: number): Promise<boolean | number> {
		return this.roleRepository.update(role, id_role).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param id
	 */
	async delete(id_role: number): Promise<boolean | number> {
		return this.roleRepository
			.delete(id_role)
			.then((data: boolean | number) => {
				return data;
			});
	}
}
