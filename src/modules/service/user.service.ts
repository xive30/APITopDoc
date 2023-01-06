import { UserDTO, UserLocationDTO } from "../Data/DTO/user.dto";
import { IRepository } from "../core/repository.interface";
import { User } from "../Data/Models/user.model";
import { IFullService, IService } from "../core/service.interface";
import { IUserRepository } from "../repository/user.repository";

export interface IUserService
	extends IService<UserDTO>,
		IFullService<UserLocationDTO> {}

export class UserService implements IUserService {
	private userRepository: IUserRepository;

	constructor(userRepository: IUserRepository) {
		this.userRepository = userRepository;
	}

	/**
	 *
	 * @param options
	 * @returns
	 */
	async findAllFull(options?: any): Promise<Array<UserLocationDTO> | null> {
		return this.userRepository.findAllFull(options).then((data) => {
			return data;
		});
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
	async update(user: User,id_td_user: number): Promise<boolean | number> {
		return this.userRepository.update(user, id_td_user).then((data) => {
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
