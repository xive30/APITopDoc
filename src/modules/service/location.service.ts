import { LocationDTO } from "../models/DTO/location.dto";
import { IRepository } from "../core/respository.interface";
import { Location } from "../models/location.model";
import { IService } from "../core/service.interface";

export class LocationService implements IService<LocationDTO> {
	private locationRepository: IRepository<LocationDTO>;

	constructor(locationRepository: IRepository<LocationDTO>) {
		this.locationRepository = locationRepository;
	}

	async findAll(): Promise<Array<LocationDTO> | null> {
		return this.locationRepository.findAll().then((data) => {
			return data;
		});
	}

	async findById(id_location: number): Promise<LocationDTO | null> {
		return this.locationRepository.findById(id_location).then((data) => {
			console.log(data);
			return data;
		});
	}

	async create(location: Location): Promise<LocationDTO | null> {
		return this.locationRepository.create(location).then((data) => {
			return data;
		});
	}

	async update(
		location: Location,
		id_location: number
	): Promise<boolean | number> {
		return this.locationRepository
			.update(location, id_location)
			.then((data) => {
				return data;
			});
	}

	async delete(id_location: number): Promise<boolean | number> {
		return this.locationRepository
			.delete(id_location)
			.then((data: boolean | number) => {
				return data;
			});
	}
}
