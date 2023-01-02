import { Request, Response } from "express";
import { logger } from "~/winston.logger";
import { IService } from "../core/service.interface";
import { UserDTO } from "../Data/DTO/user.dto";

const bcrypt = require("bcrypt");

export class UserHandler {
	private userService: IService<UserDTO>;

	constructor(userService: IService<UserDTO>) {
		this.userService = userService;
	}

	/*
	 *
	 * @param req
	 * @param res
	 * @returns
	 */
	getUsers = async (req: Request, res: Response) => {
		try {
			const result = await this.userService.findAll();
			if (result === null) return res.status(404).send();
			res.status(200).json(result);
		} catch (err) {
			logger.error(err);
			res.status(500).json(`problème au nivau de handler : ${err}`);
		}
	};

	getUserById = async (req: Request, res: Response) => {
		try {
			const result = await this.userService.findById(parseInt(req.params.id));
			if (result === null) {
				return res.status(404).send();
			}
			return res.status(200).json(result);
		} catch (error) {
			return res.status(500).json(error);
		}
	};

	createUser = async (req: Request, res: Response) => {
		try {
			req.body.password = await bcrypt.hash(req.body.password, 10);
			const result = await this.userService.create(req.body);
			return res.status(200).json(result);
		} catch (error) {
			return res.status(500).json(error);
		}
	};

	updateUser = async (req: Request, res: Response) => {
		try {
			if (req.body.password) {
				let hashedPassword = await bcrypt.hash(req.body.password, 10);
				req.body = { ...req.body, password: hashedPassword };
			}
			const result = await this.userService.update(req.body);
			return res.status(200).json(result);
		} catch (error) {
			return res.status(500).json(error);
		}
	};

	deleteUser = async (req: Request, res: Response) => {
		try {
			const result = await this.userService.delete(parseInt(req.params.id));
			return res
				.status(200)
				.json(result ? " Utilisateur supprimé" : "Utilisateur Non Supprimé");
		} catch (error) {
			return res.status(500).json(error);
		}
	};
}
