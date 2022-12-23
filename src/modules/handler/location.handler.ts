import { Request, Response } from "express";
import { LocationRepository } from "~/modules/repository/location.repository";
import { LocationService } from "~/modules/service/location.service";


const locationService = new LocationService(new LocationRepository());

const getLocations = async (req: Request, res: Response) => {
	try {
		const result = await locationService.findAll();
		if (result === null) return res.status(404).send();
		res.status(200).json(result);
	} catch (err) {
		res.status(500).json(`problème au nivau de handler : ${err}`);
	}
}
const getLocationById = async (req: Request, res: Response) => {
    try {
        const result = await locationService.findById(parseInt(req.params.id))
        if(result === null){
            return res.status(404).send()
        }
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const createLocation = async (req: Request, res: Response) => {
    try {
        const result = await locationService.create(req.body)
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const updateLocation = async (req: Request, res: Response) => {
    try {
        const result = await locationService.update(req.body, parseInt(req.params.id))
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteLocation = async (req: Request, res: Response) => {
    try {
        const result = await locationService.delete(parseInt(req.params.id))
        return res.status(200).json(result? " Location supprimé" : "Location Non Supprimé");
    } catch (error) {
        return res.status(500).json(error);
    }
};


const userHandler = { 
	getLocations,
	getLocationById,
	createLocation,
	updateLocation,
	deleteLocation,
};

export default userHandler;
