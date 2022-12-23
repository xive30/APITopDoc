import { IRepository } from "../core/respository.interface";
import { LocationDTO } from "../models/DTO/location.dto";
import { Location } from "../models/location.model";
import { LocationMapper } from "../models/Mapper/location.mapper";


export class LocationRepository implements IRepository<LocationDTO> {
    async findById(id: number): Promise<LocationDTO | null> {
		return Location.findByPk(id).then((location) => LocationMapper.MapToDTO(location));
	}

	async findAll(): Promise<Array<LocationDTO>> {
		return Location.findAll().then((data: Array<Location>) => {
			return data.map((location: Location) => {
				return LocationMapper.MapToDTO(location);
			});
		});
	}

	async create(location: Partial<LocationDTO>): Promise<LocationDTO> {
		return Location.create(location).then((data: Location) => {
			return LocationMapper.MapToDTO(data);
		});
	}

	async update(location: Location, id: number): Promise<boolean | number> {
		return Location.update(location, { where: { id_location: id } }).then(
			(data: Array<boolean | number>) => {
				return data[0];
			}
		);
	}

	async delete(id: number): Promise<boolean | number> {
		return Location.destroy({ where: { id_location: id } }).then(
			(data: boolean | number) => {
				return data;
			}
		);
	}
}