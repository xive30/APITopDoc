import { Request, Response } from "express";
import { IService } from "../core/service.interface";
import { EmailBannedDTO } from "../Data/DTO/emailBanned.dto";

export class EmailBannedHandler {
	private emailBannedService: IService<EmailBannedDTO>;

	constructor(emailBannedService: IService<EmailBannedDTO>) {
		this.emailBannedService = emailBannedService;
	}

	getEmailsBanned = async (req: Request, res: Response) => {
		try {
			const result = await this.emailBannedService.findAll();
			if (result === null) return res.status(404).send();
			res.status(200).json(result);
		} catch (err) {
			res.status(500).json(err);
		}
	};
	getEmailBannedById = async (req: Request, res: Response) => {
		try {
			const result = await this.emailBannedService.findById(
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

	createEmailBanned = async (req: Request, res: Response) => {
		try {
			const result = await this.emailBannedService.create(req.body);
			return res.status(200).json(result);
		} catch (error) {
			return res.status(500).json(error);
		}
	};

	updateEmailBanned = async (req: Request, res: Response) => {
		try {
			const result = await this.emailBannedService.update(req.body, parseInt(req.params.id));
			return res.status(200).json(result);
		} catch (error) {
			return res.status(500).json(error);
		}
	};

	deleteEmailBanned = async (req: Request, res: Response) => {
		try {
			const result = await this.emailBannedService.delete(
				parseInt(req.params.id)
			);
			return res
				.status(200)
				.json(result ? " Email Banni supprimé" : "Email Banni Non Supprimé");
		} catch (error) {
			return res.status(500).json(error);
		}
	};
}
