export interface IBaseService<T> {
    
  getAll(): Promise<T[]>;
  get(id: number): Promise<T>;
  delete(id: number);
}