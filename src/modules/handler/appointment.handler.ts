import { Request, Response } from "express";
import { IService } from "../core/service.interface";
import { AppointmentDTO } from "../Data/DTO/appointment.dto";

export class AppointmentHandler {
	private appointmentService: IService<AppointmentDTO>;

	constructor(appointmentService: IService<AppointmentDTO>) {
		this.appointmentService = appointmentService;
	}

	getAppointments = async (req: Request, res: Response) => {
		try {
			const result = await this.appointmentService.findAll();
			if (result === null) return res.status(404).send();
			res.status(200).json(result);
		} catch (err) {
			res.status(500).json(err);
		}
	};
	getAppointmentById = async (req: Request, res: Response) => {
		try {
			const result = await this.appointmentService.findById(
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

	createAppointment = async (req: Request, res: Response) => {
		try {
			const result = await this.appointmentService.create(req.body);
			return res.status(200).json(result);
		} catch (error) {
			return res.status(500).json(error);
		}
	};

	updateAppointment = async (req: Request, res: Response) => {
		try {
			const result = await this.appointmentService.update(req.body);
			return res.status(200).json(result);
		} catch (error) {
			return res.status(500).json(error);
		}
	};

	deleteAppointment = async (req: Request, res: Response) => {
		try {
			const result = await this.appointmentService.delete(
				parseInt(req.params.id)
			);
			return res
				.status(200)
				.json(result ? " Rendez-vous supprimé" : "Rendez-vous Non Supprimé");
		} catch (error) {
			return res.status(500).json(error);
		}
	};
}
