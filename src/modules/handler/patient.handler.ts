import { Request, Response } from "express";
import { IService } from "../core/service.interface";
import { PatientDTO } from "../models/DTO/patient.dto";

export class PatientHandler {
	private patientService: IService<PatientDTO>;

	constructor(patientService: IService<PatientDTO>) {
		this.patientService = patientService;
	}

	getPatients = async (req: Request, res: Response) => {
		try {
			const result = await this.patientService.findAll();
			if (result === null) return res.status(404).send();
			res.status(200).json(result);
		} catch (err) {
			res.status(500).json(err);
		}
	};
	getPatientById = async (req: Request, res: Response) => {
		try {
			const result = await this.patientService.findById(
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

	createPatient = async (req: Request, res: Response) => {
		try {
			const result = await this.patientService.create(req.body);
			return res.status(200).json(result);
		} catch (error) {
			return res.status(500).json(error);
		}
	};

	updatePatient = async (req: Request, res: Response) => {
		try {
			const result = await this.patientService.update(
				req.body,
				parseInt(req.params.id)
			);
			return res.status(200).json(result);
		} catch (error) {
			return res.status(500).json(error);
		}
	};

	deletePatient = async (req: Request, res: Response) => {
		try {
			const result = await this.patientService.delete(parseInt(req.params.id));
			return res
				.status(200)
				.json(result ? " Patient supprimé" : "Patient Non Supprimé");
		} catch (error) {
			return res.status(500).json(error);
		}
	};
}
