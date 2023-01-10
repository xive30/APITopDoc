import { NotFoundError } from "../core/errors/errors";
import { UserAuthDto } from "../Data/Dto/user.Dto";
import { UserMapper } from "../Data/Mapper/user.mapper";
import { User } from "../Data/Models/user.model";


export class AuthRepository /*extends IAuthReposytory*/ {
    
    /**
     * 
     * @param filter
     * @returns
     */
    async findByEmail(filter:any): Promise<UserAuthDto | null> {
        const result = await User.scope('withPassword').findOne({ where: { mail: filter } })
        if (result === null) throw new NotFoundError("User not found");
		return UserMapper.MapAuthToDto(result);
    }
}