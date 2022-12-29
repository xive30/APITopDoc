import { UserDTO } from "../models/DTO/user.dto";
import { IRepository } from "../core/respository.interface";
import { User } from "../models/user.model";
import { IService } from "../core/service.interface";

export class UserService implements IService<UserDTO> {
	private userRepository: IRepository<UserDTO>;

	constructor(userRepository: IRepository<UserDTO>) {
		this.userRepository = userRepository;
	}

	async findAll(): Promise<Array<UserDTO> | null> {
		return this.userRepository.findAll().then((data) => {
			return data;
		});
	}

	async findById(id_td_user: number): Promise<UserDTO | null> {
		return this.userRepository.findById(id_td_user).then((data) => {
			console.log(data);
			return data;
		});
	}

	async create(user: User): Promise<UserDTO | null> {
		return this.userRepository.create(user).then((data) => {
			return data;
		});
	}

	async update(user: User, id_td_user: number): Promise<boolean | number> {
		return this.userRepository.update(user, id_td_user).then((data) => {
			return data;
		});
	}

	async delete(id_td_user: number): Promise<boolean | number> {
		return this.userRepository
			.delete(id_td_user)
			.then((data: boolean | number) => {
				return data;
			});
	}
}
