import { UserDto, UserLocationDto } from "../Data/Dto/user.Dto";
import { User } from "../Data/Models/user.model";
import { UserMapper } from "../Data/Mapper/user.mapper";
import { IRepository } from "../core/repository.interface";
import { InputError, NotFoundError } from "../core/errors/errors";
import { Location } from "../Data/Models/location.model";

export class UserRepository implements IRepository<UserDto> {


	/**
	 *
	 * @param id
	 * @returns
	 */
	async findById(id: number): Promise<UserDto | null> {
		const result = await User.findByPk(id);
		if (result === null) throw new NotFoundError("User not found");
		return UserMapper.MapToDto(result);
	}

	/**
	 *
	 * @param filter
	 * @returns
	 */
	async findAll(filter: any): Promise<Array<UserDto>> {
		return User.findAll({
			where: filter,
		}).then((data: Array<User>) => {
			return data.map((user: User) => {
				return UserMapper.MapToDto(user);
			});
		});
	}

	/**
	 *
	 * @param user
	 */
	async create(user: Partial<UserDto>): Promise<UserDto> {
		return User.create(user).then((data: User) => {
			return UserMapper.MapToDto(data);
		});
	}

	/**
	 *
	 * @param user
	 */
	async update(user: User, id: number): Promise<boolean | number> {
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
