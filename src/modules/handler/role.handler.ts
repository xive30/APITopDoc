import { Request, Response } from "express";
import { IService } from "../core/service.interface";
import { RoleDTO } from "../Data/DTO/role.dto";

export class RoleHandler {
	private roleService: IService<RoleDTO>;

	constructor(roleService: IService<RoleDTO>) {
		this.roleService = roleService;
	}

	getRoles = async (req: Request, res: Response) => {
		try {
			const result = await this.roleService.findAll();
			if (result === null) return res.status(404).send();
			res.status(200).json(result);
		} catch (err) {
			res.status(500).json(err);
		}
	};
	getRoleById = async (req: Request, res: Response) => {
		try {
			const result = await this.roleService.findById(parseInt(req.params.id));
			if (result === null) {
				return res.status(404).send();
			}
			return res.status(200).json(result);
		} catch (error) {
			return res.status(500).json(error);
		}
	};

	createRole = async (req: Request, res: Response) => {
		try {
			const result = await this.roleService.create(req.body);
			return res.status(200).json(result);
		} catch (error) {
			return res.status(500).json(error);
		}
	};

	updateRole = async (req: Request, res: Response) => {
		try {
			const result = await this.roleService.update(req.body, parseInt(req.params.id));
			return res.status(200).json(result);
		} catch (error) {
			return res.status(500).json(error);
		}
	};

	deleteRole = async (req: Request, res: Response) => {
		try {
			const result = await this.roleService.delete(parseInt(req.params.id));
			return res
				.status(200)
				.json(result ? " Role supprimé" : "Role Non Supprimé");
		} catch (error) {
			return res.status(500).json(error);
		}
	};
}
