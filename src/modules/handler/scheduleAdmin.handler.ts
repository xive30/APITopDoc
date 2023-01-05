import { Request, Response } from "express";
import { IService } from "../core/service.interface";
import { ScheduleAdminDTO } from "../Data/DTO/scheduleAdmin.dto";
import { ISAdminService } from "../service/scheduleAdmin.service";

export class ScheduleAdminHandler {
	private scheduleAdminService: ISAdminService;

	constructor(scheduleAdminService: ISAdminService) {
		this.scheduleAdminService = scheduleAdminService;
	}

	getScheduleAdmins = async (req: Request, res: Response) => {
		try {
			const result = await this.scheduleAdminService.findAllFull();
			if (result === null) return res.status(404).send();
			res.status(200).json(result);
		} catch (err) {
			res.status(500).json(err);
		}
	};
	getScheduleAdminById = async (req: Request, res: Response) => {
		try {
			const result = await this.scheduleAdminService.findById(
				parseInt(req.params.id)
			);
			if (result === null) {
				return res.status(404).send();
			}
			return res.status(200).json(result);
		} catch (error) {
			return res.status(500).json(error);
		}
	};

	createScheduleAdmin = async (req: Request, res: Response) => {
		try {
			const result = await this.scheduleAdminService.create(req.body);
			return res.status(200).json(result);
		} catch (error) {
			return res.status(500).json(error);
		}
	};

	updateScheduleAdmin = async (req: Request, res: Response) => {
		try {
			const result = await this.scheduleAdminService.update(req.body);
			return res.status(200).json(result);
		} catch (error) {
			return res.status(500).json(error);
		}
	};

	deleteScheduleAdmin = async (req: Request, res: Response) => {
		try {
			const result = await this.scheduleAdminService.delete(
				parseInt(req.params.id)
			);
			return res
				.status(200)
				.json(result ? " Gestionnaire supprimé" : "Gestionnaire Non Supprimé");
		} catch (error) {
			return res.status(500).json(error);
		}
	};
}
