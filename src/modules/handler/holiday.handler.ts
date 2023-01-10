import { Request, Response } from "express";
import { IService } from "../core/service.interface";
import { HolidayDto } from "../Data/Dto/holiday.Dto";

export class HolidayHandler {
	private holidayService: IService<HolidayDto>;

	constructor(holidayService: IService<HolidayDto>) {
		this.holidayService = holidayService;
	}

	getHolidays = async (req: Request, res: Response) => {
		try {
			const result = await this.holidayService.findAll();
			if (result === null) return res.status(404).send();
			res.status(200).json(result);
		} catch (err) {
			res.status(500).json(err);
		}
	};
	getHolidayById = async (req: Request, res: Response) => {
		try {
			const result = await this.holidayService.findById(
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

	createHoliday = async (req: Request, res: Response) => {
		try {
			const result = await this.holidayService.create(req.body);
			return res.status(200).json(result);
		} catch (error) {
			return res.status(500).json(error);
		}
	};

	updateHoliday = async (req: Request, res: Response) => {
		try {
			const result = await this.holidayService.update(
				req.body,
				parseInt(req.params.id)
			);
			return res.status(200).json(result);
		} catch (error) {
			return res.status(500).json(error);
		}
	};

	deleteHoliday = async (req: Request, res: Response) => {
		try {
			const result = await this.holidayService.delete(parseInt(req.params.id));
			return res
				.status(200)
				.json(result ? " Vacances supprimé" : "Vacances Non Supprimé");
		} catch (error) {
			return res.status(500).json(error);
		}
	};
}
