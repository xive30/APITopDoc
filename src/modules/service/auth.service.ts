import { UserAuthDto } from "../Data/Dto/user.Dto";

export class AuthService {
	private authRepository;

	constructor(authRepository: any) {
		this.authRepository = authRepository;
	}

	/**
	 *
	 * @param id
	 * @returns
	 */
	async findByEmail(email: string): Promise<UserAuthDto | null> {
		return this.authRepository.findByEmail(email).then((data: any) => {

			return data;
		});
	}
}
