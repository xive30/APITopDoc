import { Request, Response } from "express";
import { IService } from "../core/service.interface";
import { LocationDTO } from "../models/DTO/location.dto";

export class LocationHandler {
	private locationService: IService<LocationDTO>;

	constructor(locationService: IService<LocationDTO>) {
		this.locationService = locationService;
	}

	getLocations = async (req: Request, res: Response) => {
		try {
			const result = await this.locationService.findAll();
			if (result === null) return res.status(404).send();
			res.status(200).json(result);
		} catch (err) {
			res.status(500).json(`problème au nivau de handler : ${err}`);
		}
	};
	getLocationById = async (req: Request, res: Response) => {
		try {
			const result = await this.locationService.findById(
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

	createLocation = async (req: Request, res: Response) => {
		try {
			const result = await this.locationService.create(req.body);
			return res.status(200).json(result);
		} catch (error) {
			return res.status(500).json(error);
		}
	};

	updateLocation = async (req: Request, res: Response) => {
		try {
			const result = await this.locationService.update(
				req.body,
				parseInt(req.params.id)
			);
			return res.status(200).json(result);
		} catch (error) {
			return res.status(500).json(error);
		}
	};

	deleteLocation = async (req: Request, res: Response) => {
		try {
			const result = await this.locationService.delete(parseInt(req.params.id));
			return res
				.status(200)
				.json(result ? " Location supprimé" : "Location Non Supprimé");
		} catch (error) {
			return res.status(500).json(error);
		}
	};
}
