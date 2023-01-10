import { IRepository } from "~/modules/core/repository.interface";
import { UserDto } from "../../Data/Dto/user.Dto";
import { UserService } from "../user.service";

describe("UserService", () => {
	describe("UserService.__findById_null", () => {
		it("should return null", async () => {
			const id = 1;

			const expected = null;

			const repo = new TestRepositoryNullData();
			const service = new UserService(repo);

			//act
			const result = await service.findById(id);

			//assert
			expect(result).toEqual(expected);
		});
	});

	describe("UserService.__findById_Data", () => {
		it("should return null", async () => {
			const id = 1;

			const expected = {
				nom: "M. Doe",
				prenom: "John",
			};

			const repo = new TestRepositoryWithValue();
			const service = new UserService(repo);

			//act
			const result = await service.findById(id);

			//assert
			expect(result).toEqual(expected);
		});
	});
});

/**
 * Mock with null data
 */
class TestRepositoryNullData implements IRepository<UserDto> {
	findById(id: number): Promise<UserDto | null> {
		return new Promise((resolve, reject): void => {
			resolve(null);
		});
	}

	findAll(): Promise<UserDto[]> {
		throw new Error("Method not implemented.");
	}
	create(t: UserDto): Promise<UserDto> {
		throw new Error("Method not implemented.");
	}
	delete(id: number): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
}

/**
 * Mock with person
 */
class TestRepositoryWithValue implements IRepository<UserDto> {
	findById(id: number): Promise<UserDto | null> {
		const expected = {
			nom: "Doe",
			prenom: "John",
		};
		return new Promise((resolve, reject): void => {
			resolve(expected);
		});
	}

	findAll(): Promise<UserDto[]> {
		throw new Error("Method not implemented.");
	}
	create(t: UserDto): Promise<UserDto> {
		throw new Error("Method not implemented.");
	}
	delete(id: number): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
}
