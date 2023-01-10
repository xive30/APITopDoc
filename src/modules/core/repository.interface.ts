export interface IRepository<T> {
	findById(id: number): Promise<T | null>;
	findAll(options?: any): Promise<T[]>;
	create(t: T): Promise<T>;
	update(t: T, id: number): Promise<boolean | number>;
	delete(id: number): Promise<boolean | number>;
}

export interface IFullRepository<T> {
	findAllFull(options?: any): Promise<T[]>;
	createFull(t: T): Promise<T | null>;
}
