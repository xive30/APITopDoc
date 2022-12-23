import { Request, Response } from "express";
import { UserRepository } from "~/modules/repository/user.repository";
import { UserService } from "~/modules/service/user.service";

const bcrypt = require("bcrypt");
const userService = new UserService(new UserRepository());

const getUsers = async (req: Request, res: Response) => {
	try {
		const result = await userService.findAll();
		if (result === null) return res.status(404).send();
		res.status(200).json(result);
	} catch (err) {
		res.status(500).json(`problème au nivau de handler : ${err}`);
	}
};
const getUserById = async (req: Request, res: Response) => {
	try {
		const result = await userService.findById(parseInt(req.params.id));
		if (result === null) {
			return res.status(404).send();
		}
		return res.status(200).json(result);
	} catch (error) {
		return res.status(500).json(error);
	}
};

const createUser = async (req: Request, res: Response) => {
	try {
		req.body.password = await bcrypt.hash(req.body.password, 10);
		const result = await userService.create(req.body);
		return res.status(200).json(result);
	} catch (error) {
		return res.status(500).json(error);
	}
};

const updateUser = async (req: Request, res: Response) => {
	try {
		if (req.body.password) {
			let hashedPassword = await bcrypt.hash(req.body.password, 10);
			req.body = { ...req.body, password: hashedPassword };
		}
		const result = await userService.update(req.body, parseInt(req.params.id));
		return res.status(200).json(result);
	} catch (error) {
		return res.status(500).json(error);
	}
};

const deleteUser = async (req: Request, res: Response) => {
	try {
		const result = await userService.delete(parseInt(req.params.id));
		return res
			.status(200)
			.json(result ? " Utilisateur supprimé" : "Utilisateur Non Supprimé");
	} catch (error) {
		return res.status(500).json(error);
	}
};

const userHandler = {
	getUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
};

export default userHandler;
