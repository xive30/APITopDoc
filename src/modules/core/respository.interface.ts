export interface IRepository<T> {

    findById(id: number): Promise<T | null>;
    findAll(): Promise<T[]>;
    create(t: T): Promise<T>;
    update(t: T, id: number): Promise<boolean| number> 
    delete(id: number): Promise<boolean | number>;

}