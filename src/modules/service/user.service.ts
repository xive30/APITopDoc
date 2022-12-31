import { UserDTO } from "../models/DTO/user.dto";
import { IRepository } from "../core/respository.interface";
import { User } from "../models/Models/user.model";
import { IService } from "../core/service.interface";

export class UserService implements IService<UserDTO> {
	private userRepository: IRepository<UserDTO>;

	constructor(userRepository: IRepository<UserDTO>) {
		this.userRepository = userRepository;
	}

	/**
	 *
	 * @param options
	 * @returns
	 */
	async findAll(options?: any): Promise<Array<UserDTO> | null> {
		return this.userRepository.findAll(options).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param id
	 * @returns
	 */
	async findById(id_td_user: number): Promise<UserDTO | null> {
		return this.userRepository.findById(id_td_user).then((data) => {
			console.log(data);
			return data;
		});
	}

	/**
	 *
	 * @param t
	 * @returns
	 */
	async create(user: User): Promise<UserDTO | null> {
		return this.userRepository.create(user).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param t
	 * @returns
	 */
	async update(user: User): Promise<UserDTO | null> {
		return this.userRepository.update(user).then((data) => {
			return data;
		});
	}

	/**
	 *
	 * @param id
	 * @returns
	 */
	async delete(id_td_user: number): Promise<boolean | number> {
		return this.userRepository
			.delete(id_td_user)
			.then((data: boolean | number) => {
				return data;
			});
	}
}
