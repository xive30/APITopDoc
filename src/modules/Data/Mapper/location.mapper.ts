import { LocationDto } from "../Dto/location.Dto";
import { Location } from "../Models/location.model";

export class LocationMapper {
	static MapToDto(location: Location | null): LocationDto {
		if (location === null) return null as any;
		const Dto: LocationDto = {
			address: location.address,
			zip_code: location.zip_code,
			city: location.city,
		};
		return Dto;
	}
}
