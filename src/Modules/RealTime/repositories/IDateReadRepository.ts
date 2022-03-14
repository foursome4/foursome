import { DateRead } from "../models/DateRead";

interface IDateReadDTO {
  DateRead: string;
  idAccount: string;
  
}

interface IDateReadRepository {
  create({
    DateRead
    }: IDateReadDTO): Promise<void>;
    findByIdAccount(idAccount: string): Promise<void> ;
    list();
    update({ DateRead }: IDateReadDTO): void;
}

export { IDateReadRepository, IDateReadDTO };
