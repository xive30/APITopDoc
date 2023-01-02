import { Request, Response } from "express";
import { logger } from "~/winston.logger";
import { IService } from "../core/service.interface";
import { UserDTO } from "../Data/DTO/user.dto";

export class AdminHandler {
	private adminService: IService<UserDTO>;

	constructor(adminService: IService<UserDTO>) {
		this.adminService = adminService;
	}

	/*
	 *
	 * @param req
	 * @param res
	 * @returns
	 */
	create = async (req: Request, res: Response) => {
		console.log(this.adminService);

		const adminDto: UserDTO = req.body;
		try {
			const result = await this.adminService.create(adminDto);

			if (result == null) return res.status(404).send;

			res.status(200).json(result);
		} catch (err) {
			logger.error(err);
			throw err;
		}
	};

	/*
	 *
	 * @param req
	 * @param res
	 * @returns
	 */
	async getAdmin(req: Request, res: Response) {
		return null;
	}

	//   la partie transaction

	/**
	 *
	 * @param admin
	 * @returns
	 */
	async create(admin: AdminDTO): Promise<AdminDTO> {
		const t = await sequelize.transaction();

		try {
			const newPerson = await Person.create(
				{
					personne_nom: admin.personneNom,
					personne_prenom: admin.personnePrenom,
				},
				{
					transaction: t,
				}
			);

			const newAdmin = await Admin.create(
				{
					personne_id: newPerson.personId,
					service: admin.service,
				},
				{
					transaction: t,
				}
			);

			const result: AdminDTO = {
				personId: newPerson.getDataValue("personne_id"),
				personneNom: newPerson.getDataValue("personne_nom"),
				personnePrenom: newPerson.getDataValue("personne_prenom"),
				service: newAdmin.service,
			};

			t.commit();
			return result;
		} catch (err) {
			t.rollback();
			throw err;
		}
	}
}
