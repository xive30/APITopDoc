import { UserDTO } from "../Data/DTO/user.dto";
import { User } from "../Data/Models/user.model";
import { UserMapper } from "../Data/Mapper/user.mapper";
import { IRepository } from "../core/repository.interface";
import { InputError, NotFoundError } from "../core/errors/errors";

export class UserRepository implements IRepository<UserDTO> {
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
	async update(user: User): Promise<UserDTO> {
		if (user.id_td_user === null) throw new InputError(" No id for User");

		const row = await User.findByPk(user.id_td_user);

		if (row === null) throw new NotFoundError("User not Found");

		const result = await row.save();
		return UserMapper.MapToDTO(result);
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
