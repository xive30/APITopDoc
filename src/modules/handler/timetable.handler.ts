import { Request, Response } from "express";
import { IService } from "../core/service.interface";
import { TimetableDto } from "../Data/Dto/timetable.Dto";

export class TimetableHandler {
	private timetableService: IService<TimetableDto>;

	constructor(timetableService: IService<TimetableDto>) {
		this.timetableService = timetableService;
	}

	getTimetables = async (req: Request, res: Response) => {
		try {
			const result = await this.timetableService.findAll();
			if (result === null) return res.status(404).send();
			res.status(200).json(result);
		} catch (err) {
			res.status(500).json(err);
		}
	};

	getTimetableById = async (req: Request, res: Response) => {
		try {
			const result = await this.timetableService.findById(
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

	createTimetable = async (req: Request, res: Response) => {
		try {
			const result = await this.timetableService.create(req.body);
			return res.status(200).json(result);
		} catch (error) {
			return res.status(500).json(error);
		}
	};

	updateTimetable = async (req: Request, res: Response) => {
		try {
			const result = await this.timetableService.update(
				req.body,
				parseInt(req.params.id)
			);
			return res.status(200).json(result);
		} catch (error) {
			return res.status(500).json(error);
		}
	};

	deleteTimetable = async (req: Request, res: Response) => {
		try {
			const result = await this.timetableService.delete(
				parseInt(req.params.id)
			);
			return res
				.status(200)
				.json(result ? " Horaire supprimé" : "Horaire Non Supprimé");
		} catch (error) {
			return res.status(500).json(error);
		}
	};
}
