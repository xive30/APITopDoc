import { User } from "../models/user.model";
import { UserRepository } from "./user.repository";

describe("UserRepository", () => {
	beforeEach(() => {
		jest.resetAllMocks();
	});

	describe("UserRepository.__findById", () => {
		it("should return person detail", async () => {
			const id = 1;

			const mockResponse = {
				personnne_id: 1,
				personne_nom: "Doe",
				personne_prenom: "John",
			};

			const expected = {
				nom: "Doe",
				prenom: "John",
			};

			const repo = new UserRepository();
			User.findOne = jest.fn().mockResolvedValue(mockResponse);

			//act
			const result = await repo.findById(id);

			//assert
			expect(result).toEqual(expected);
			expect(User.findOne).toHaveBeenCalledTimes(1);
			expect(User.findOne).toBeCalledWith({
				where: {
					personnne_id: id,
				},
			});
		});
	});
});
