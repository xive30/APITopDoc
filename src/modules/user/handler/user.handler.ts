import { Request, Response } from "express";
import { UserRepository } from "~/modules/user/repository/user.repository";
import { UserService } from "~/modules/user/service/user.service";

const userService = new UserService(new UserRepository());

async function getUsers(req: Request, res: Response) {
	try {
		const result = await userService.findById(1);
		if (result === null) return res.status(404).send();
		res.status(200).json(result);
	} catch (err) {
		res.status(500).json(`problème au nivau de handler : ${err}`);
	}
}

const handler = { getUsers };

export default handler;
