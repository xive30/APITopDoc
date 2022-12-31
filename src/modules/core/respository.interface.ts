export interface IRepository<T> {
	findById(id: number): Promise<T | null>;
	findAll(options? : any): Promise<T[]>;
	create(t: T): Promise<T>;
	update(t: T): Promise<T>;
	delete(id: number): Promise<boolean | number>;
}
