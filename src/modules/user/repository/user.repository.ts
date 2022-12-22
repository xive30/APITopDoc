import { UserDTO } from "../models/user.dto";
import { User } from "../models/user.model";
import { UserMapper } from "../models/user.mapper";
import { IRepository } from "../../core/respository.interface";

export class UserRepository implements IRepository<UserDTO> {
	
	async findById(id: number): Promise<UserDTO | null> {
		return User.findByPk(id).then((person) => UserMapper.MapToDTO(person));
	}

	async findAll(): Promise<Array<UserDTO>> {
		return User.findAll().then((data: Array<User>) => {
			return data.map((user: User) => {
				return UserMapper.MapToDTO(user);
			})
		})
	}

	async create(user: Partial<UserDTO>): Promise<UserDTO> {
        return User.create(user).then((data : User) => {
                return UserMapper.MapToDTO(data)
        })
    }

	async update(user: User, id: number): Promise<boolean | number> {
		return User.update(user, {where:{id_td_user: id}}).then((data : Array<(boolean | number)>) => {
			return data[0]
		})     
	}

    async delete(id: number): Promise<boolean | number> {
        return User.destroy({where:{id_td_user:id}}).then((data : boolean | number) => {
            return data
        })
    }
}
