import { UserDTO } from "../models/user.dto";
import { User } from "../models/user.model";
import { UserMapper } from "../models/user.mapper";
import { IRepository } from "../../core/respository.interface";

export class UserRepository implements IRepository<UserDTO> {
	async findById(id: number): Promise<UserDTO | null> {
		return User.findByPk(id).then((person) => UserMapper.MapToDTO(person));
	}

	findAll(): Promise<UserDTO[]> {
		throw new Error("Method not implemented.");
	}

	create(t: UserDTO): Promise<UserDTO> {
		throw new Error("Method not implemented.");
	}

	update(id: number): Promise<number | boolean> {
		throw new Error("Method not implemented.");
	}

	delete(id: number): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
}
