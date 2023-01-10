export interface ActivityLocationDto {
	id_activity?: number;

	activity_type: string;

	description: string;

	activity_validation?: boolean;

	id_location: number;

	address: string;

	zip_code: string;

	city: string;
}

export interface ActivityDto {
	id_activity?: number;

	activity_type: string;

	description: string;

	activity_validation?: boolean;
}
