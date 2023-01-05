import { UserDTO, UserLocationDTO } from "../Data/DTO/user.dto";
import { User } from "../Data/Models/user.model";
import { UserMapper } from "../Data/Mapper/user.mapper";
import { IFullRepository, IRepository } from "../core/repository.interface";
import { InputError, NotFoundError } from "../core/errors/errors";
import { Location } from "../Data/Models/location.model";

export interface IUserRepository
	extends IRepository<UserDTO>,
		IFullRepository<UserLocationDTO> {}

export class UserRepository implements IUserRepository {
	/**
	 *
	 * @param filter
	 * @returns
	 */
	async findAllFull(filter: any): Promise<UserLocationDTO[]> {
		const users = await User.findAll({
			where: filter,
			include: Location,
		});
		return users.map((user) => {
			return UserMapper.MapToFullUserDTO(user);
		});
	}

	/**
	 *
	 * @param id
	 * @returns
	 */
	async findById(id: number): Promise<UserDTO | null> {
		const result = await User.findByPk(id);
		if (result === null) throw new NotFoundError("User not found");
		return UserMapper.MapToDTO(result);
	}

	/**
	 *
	 * @param filter
	 * @returns
	 */
	async findAll(filter: any): Promise<Array<UserDTO>> {
		return User.findAll({
			where: filter,
		}).then((data: Array<User>) => {
			return data.map((user: User) => {
				return UserMapper.MapToDTO(user);
			});
		});
	}

	/**
	 *
	 * @param user
	 */
	async create(user: Partial<UserDTO>): Promise<UserDTO> {
		return User.create(user).then((data: User) => {
			return UserMapper.MapToDTO(data);
		});
	}

	/**
	 *
	 * @param user
	 */
	async update(user: User, id: number ): Promise<boolean | number> {
		return User.update(user, { where: { id_td_user: id } }).then(
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
		return User.destroy({ where: { id_td_user: id } }).then(
			(data: boolean | number) => {
				return data;
			}
		);
	}
}
