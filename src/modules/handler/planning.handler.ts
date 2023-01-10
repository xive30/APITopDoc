import { Request, Response } from "express";
import { IPlanningService } from "../service/planning.service";

export class PlanningHandler {
	private planningService: IPlanningService;

	constructor(planningService: IPlanningService) {
		this.planningService = planningService;
	}

	getplannings = async (req: Request, res: Response) => {
		try {
			const result = await this.planningService.findAllFull();
			if (result === null) return res.status(404).send();
			res.status(200).json(result);
		} catch (err) {
			res.status(500).json(err);
		}
	};

	getPlanningById = async (req: Request, res: Response) => {
		try {
			const result = await this.planningService.findById(
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

	createPlanning = async (req: Request, res: Response) => {
		try {
			const result = await this.planningService.create(req.body);
			return res.status(200).json(result);
		} catch (error) {
			return res.status(500).json(error);
		}
	};

	updatePlanning = async (req: Request, res: Response) => {
		try {
			const result = await this.planningService.update(req.body, parseInt(req.params.id));
			return res.status(200).json(result);
		} catch (error) {
			return res.status(500).json(error);
		}
	};

	deletePlanning = async (req: Request, res: Response) => {
		try {
			const result = await this.planningService.delete(parseInt(req.params.id));
			return res
				.status(200)
				.json(result ? " Planning supprimé" : "Planning Non Supprimé");
		} catch (error) {
			return res.status(500).json(error);
		}
	};
}
