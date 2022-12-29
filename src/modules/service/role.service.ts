import { IRepository } from "../core/respository.interface";
import { IService } from "../core/service.interface";
import { RoleDTO } from "../models/DTO/role.dto";
import { Role } from "../models/role.model";

export class RoleService implements IService<RoleDTO> {
	private roleRepository: IRepository<RoleDTO>;

	constructor(roleRepository: IRepository<RoleDTO>) {
		this.roleRepository = roleRepository;
	}

	async findAll(): Promise<Array<RoleDTO> | null> {
		return this.roleRepository.findAll().then((data) => {
			return data;
		});
	}

	async findById(id_role: number): Promise<RoleDTO | null> {
		return this.roleRepository.findById(id_role).then((data) => {
			console.log(data);
			return data;
		});
	}

	async create(role: Role): Promise<RoleDTO | null> {
		return this.roleRepository.create(role).then((data) => {
			return data;
		});
	}

	async update(role: Role, id_role: number): Promise<boolean | number> {
		return this.roleRepository.update(role, id_role).then((data) => {
			return data;
		});
	}

	async delete(id_role: number): Promise<boolean | number> {
		return this.roleRepository
			.delete(id_role)
			.then((data: boolean | number) => {
				return data;
			});
	}
}
