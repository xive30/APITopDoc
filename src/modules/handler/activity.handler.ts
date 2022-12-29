import { Request, Response } from "express";
import { IService } from "../core/service.interface";
import { ActivityDTO } from "../models/DTO/activity.dto";

export class ActivityHandler {
	private activityService: IService<ActivityDTO>;

	constructor(activityService: IService<ActivityDTO>) {
		this.activityService = activityService;
	}

	getActivities = async (req: Request, res: Response) => {
		try {
			const result = await this.activityService.findAll();
			if (result === null) return res.status(404).send();
			res.status(200).json(result);
		} catch (err) {
			res.status(500).json(`problème au nivau de handler : ${err}`);
		}
	};
	getActivityById = async (req: Request, res: Response) => {
		try {
			const result = await this.activityService.findById(
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

	createActivity = async (req: Request, res: Response) => {
		try {
			const result = await this.activityService.create(req.body);
			return res.status(200).json(result);
		} catch (error) {
			return res.status(500).json(error);
		}
	};

	updateActivity = async (req: Request, res: Response) => {
		try {
			const result = await this.activityService.update(
				req.body,
				parseInt(req.params.id)
			);
			return res.status(200).json(result);
		} catch (error) {
			return res.status(500).json(error);
		}
	};

	deleteActivity = async (req: Request, res: Response) => {
		try {
			const result = await this.activityService.delete(parseInt(req.params.id));
			return res
				.status(200)
				.json(result ? " Activité supprimé" : "Activité Non Supprimé");
		} catch (error) {
			return res.status(500).json(error);
		}
	};
}
